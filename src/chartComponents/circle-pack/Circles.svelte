<script>
    import { LayerCake, Svg, Html } from 'layercake';
    import { scaleOrdinal, scaleBand } from 'd3-scale';

    import Annotations from '../../layercake/Annotations.html.svelte';
    import ForceLayout from '../../layercake/CirclePackForce.svelte';
    import Key from '../../layercake/Key.html.svelte';


    import data from '../circle-pack/data.json';
    import flatData from '../circle-pack/flatData.json';
    
    const xKey = 'action_taken';
    const rKey = 'counts';
    const zKey = 'race';

    const annotations = [
    {
      text: 'Arrest',
      top: '300%',
      left: '10%'
      },
    {
      text: 'Citation/summons',
      top: '300%',
      left: '30%'
      }, 

    {
      text: 'No enforcement action',
      top: '300%',
      left: '55%'
    }, 

    {
      text: 'Warning',
      top: '300%',
      left: '87%'
    }
  ];

    let groupBy = 'false';
  
    const seriesColors = ['#B5E6C2','#FF5200', '#96BFE6', '#003333', '#FFF080'];

    let manyBodyStrength = 3;
    let xStrength = 0.1

  </script>

<div class="wrapper">
  <label class="option">
    <input type="radio" name="light" bind:group={groupBy} value="false" class="input">
    <div class="btn">
      <span class="span">Clump together</span>
    </div>
  </label>
  <label class="option">
    <input type="radio" name="light" bind:group={groupBy} value="true" class="input">
    <div class="btn">
      <span class="span">By action type</span>
    </div>
  </label>
</div>
  
  <div class="chart-container">
    <LayerCake
      {data}
      x={xKey}
      r={rKey}
      z={zKey}
      xScale={scaleBand()}
      rRange={[10,60]}
      zScale={scaleOrdinal()}
      zRange={seriesColors}
      flatData={flatData}

    >
      <Svg>
            <ForceLayout
            {manyBodyStrength}
            {xStrength}
            groupBy={JSON.parse(groupBy)}
            nodeStroke='#000'
            />

      </Svg>

      <Html
      pointerEvents={false}
      >
      <Key 
          align='end'
          shape='circle'
        />
    
        {#if groupBy==='true'}
        <Annotations {annotations}/>
        {/if}

      </Html>
    </LayerCake>
    
  </div>

  <style>
    /*
      The wrapper div needs to have an explicit width and height in CSS.
      It can also be a flexbox child or CSS grid element.
      The point being it needs dimensions since the <LayerCake> element will
      expand to fill it.
    */
    .chart-container {
      width: 150%;
      height: 600px;
    }
    label {
      cursor: pointer;
    }
    input {
      margin-right: 7px;
    }

 

  .wrapper {
  --font-color-dark: #323232;
  --font-color-light: #fff;
  --bg-color: #fff;
  --main-color: #323232;
  --secondary-color: #505050;
  position: center;
  width: 250px;
  height: 36px;
  background-color: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 34px;
  display: flex;
  flex-direction: row;
  box-shadow: 2px 2px var(--main-color);
}

.option {
  margin-right: 4px;
  width: calc(50% - 3px); /* Adjusted width for two options */
  height: 29px;
  position: relative;
  top: 2px;
  left: 2px;
  border-radius: 30px;
  transition: 0.25s cubic-bezier(0, 0, 0, 1);
  font-size: 14px
  }

  .option:last-child {
    margin-right: 4px;
  }

  .option:hover {
    background-color: var(--secondary-color);
  }

  .option:hover .span {
    color: var(--font-color-light);
  }

  .input {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0; /* Hide the input */
    cursor: pointer;
  }

  .btn {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .span {
    color: var(--font-color-dark);
  }

  .input:checked + .btn {
    background-color: var(--main-color);
    transition: 0.2s cubic-bezier(0, 0, 0, 1);
  }

  .input:checked + .btn .span {
    color: var(--font-color-light);
    transition: 0.25s cubic-bezier(0, 0, 0, 1);
  }
    
  </style>
