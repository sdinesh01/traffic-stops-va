<script>
	import * as Pancake from '@sveltejs/pancake'; 
	import { agencies, years } from "./data2.js"; 

	let x1 = +Infinity;
	let x2 = -Infinity
	let y1 = +Infinity;
	let y2 = -Infinity;

	agencies.forEach(agency => {
		agency.data.forEach(d => {
			if (d.x < x1) x1 = d.x;
			if (d.x > x2) x2 = d.x;
			if (d.y < y1) y1 = d.y;
			if (d.y > y2) y2 = d.y;
		});
	});

	let closest;
	let filter = '';

	$: regex = filter ? new RegExp(filter, 'i') : null;
	$: filtered = regex ? agencies.filter(agency => regex.test(agency.name)) : agencies;

	$: points = filtered.reduce((points, agency) => {
		return points.concat(agency.data.map(d => ({
			x: d.x,
			y: d.y,
			agency
		})));
	}, []);
</script>

<div class="input-container" >
<input role="button" placeholder="Type to filter" bind:value={filter}>
</div>

<div class="chart" >
	<Pancake.Chart {x1} {x2} y1={y1} y2={y2}>
		<Pancake.Grid horizontal count={8} let:value>
			<div class="grid-line horizontal"><span>{value}</span></div>
		</Pancake.Grid>

		<Pancake.Grid vertical count={4} let:value>
			<span class="x-label">{value === 2020 ? `June-Dec. ${value}` : value === 2023 ? `Jan.-Sept. ${value}` : value}</span>
		</Pancake.Grid>

		<Pancake.Svg>
			{#each filtered as agency}
				<Pancake.SvgLine data={agency.data} let:d>
					<path class="data" {d}></path>
				</Pancake.SvgLine>
			{/each}

			{#if closest}
				<Pancake.SvgLine data={closest.agency.data} let:d>
					<path class="highlight" {d}></path>
				</Pancake.SvgLine>
			{/if}
		</Pancake.Svg>

		{#if closest}
			<Pancake.Point x={closest.x} y={closest.y}>
				<span class="annotation-point"></span>
				<div class="annotation" style="transform: translate(-{100 * ((closest.x - x1) / (x2 - x1))}%,0)">
					<strong>{closest.agency.name}</strong>
					<span>{closest.x}: {closest.y} traffic stops</span>
				</div>
			</Pancake.Point>
		{/if}

		<Pancake.Quadtree data={points} bind:closest/>
	</Pancake.Chart>
</div>


<style>
	.input-container {
		padding: 2em 0 0em 2em;
		margin: 0 0 0px 0;
	}

	.chart {
		height: 500px;
		padding: 2em 0 2em 4em;
		margin: 0 0 36px 0;
	}

	input {
		padding: 2em 0 2em 4em;
		font-size: inherit;
		font-family: inherit;
		padding: 0.5em;
	}

	.grid-line {
		position: relative;
		display: block;
	}

	.grid-line.horizontal {
		width: calc(100% + 2em);
		left: -2em;
		border-bottom: 1px dashed #ccc;
	}

	.grid-line span {
		position: absolute;
		left: 0;
		bottom: 2px;
		font-family: sans-serif;
		font-size: 14px;
		color: #999;
	}

	.x-label {
		position: absolute;
		width: 4em;
		left: -2em;
		bottom: -25px;
		font-family: sans-serif;
		font-size: 14px;
		color: #999;
		text-align: center;
		white-space: nowrap;
	}

	path.data {
		stroke: rgba(0,0,0,0.2);
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 1px;
		fill: none;
	}

	.highlight {
		stroke: #a9c7ee;
		fill: none;
		stroke-width: 2;
	}

	.annotation {
		position: absolute;
		white-space: nowrap;
		bottom: 1em;
		line-height: 1.2;
		background-color: rgba(255,255,255,0.9);
		padding: 0.2em 0.4em;
		border-radius: 2px;
	}

	.annotation-point {
		position: absolute;
		width: 10px;
		height: 10px;
		background-color: #ff3e00;
		border-radius: 50%;
		transform: translate(-50%,-50%);
	}

	.annotation strong {
		display: block;
		font-size: 20px;
	}

	.annotation span {
		display: block;
		font-size: 14px;
	}

	.column {
	float: left;
	width: 70%;
	}

	/* Clear floats after the columns */
	.row:after {
	content: "";
	display: table;
	clear: both;
}

</style>

