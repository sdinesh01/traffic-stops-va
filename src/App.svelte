<script>

	import { setContext, onMount } from "svelte";
	import { getMotion } from "./utils.js";
	import { themes } from "./config.js";
	import Header from "./layout/Header.svelte";
	import Section from "./layout/Section.svelte";

	import Filler from "./layout/Filler.svelte";

	//import Toggle from "./ui/Toggle.svelte"; This is currently only being implemented to toggle animations
	import Arrow from "./ui/Arrow.svelte";

	import { setColors } from "./utils.js";

	// The components below are used to build scrollytelling functionality, 
	// which is a future step with this project

	// import Em from "./ui/Em.svelte";
	// import Media from "./layout/Media.svelte";
	// import Scroller from "./layout/Scroller.svelte"; commen
	// import Divider from "./layout/Divider.svelte";

	// CHART COMPONENTS
	import LineChart from "../src/chartComponents/line-chart/LineChart.svelte";
	import LineChartMini from "../src/chartComponents/line-chart-mini/LineChart.svelte";
	import Circles from "../src/chartComponents/circle-pack/Circles.svelte";
	import Calendar from "../src/chartComponents/calendar-chart/Calendar.svelte";

	// Set theme globally (options are 'light', 'dark' or 'lightblue') -- I'm not 100% done with the dark config
	let theme = "light";
	setContext("theme", theme);
	setColors(themes, theme);

	// CONFIG FOR SCROLLER COMPONENTS -- TO DO
	// const threshold = 0.65;
	// // State
	let animation = getMotion(); // Set animation preference depending on browser preference
	// let id = {}; // Object to hold visible section IDs of Scroller components
	// let idPrev = {}; // Object to keep track of previous IDs, to compare for changes
	// onMount(() => {
	// 	idPrev = {...id};
	// });
</script>


<Header bgcolor="#003333" bgfixed={true} theme="dark" center={false} short={true}>
	<h1>Traffic Stops in Virginia, 2020-2023</h1>
	<p class="text-big" style="margin-top: 5px">
		What the community policing dataset can tell us about equity in policing
	</p>
	<p style="margin-top: 20px">
		May 13, 2024
	</p>

	<!-- When the scrolling component is built out with animations,
		 I will include the option to toggle off the animated components. -->
	<!-- <p> 
		<Toggle label="Animation {animation ? 'on' : 'off'}" mono={true} bind:checked={animation}/>
	</p> -->

	<div style="margin-top: 90px;">
		<Arrow color="white" {animation}>Scroll to begin</Arrow>
	</div>
</Header>

<Filler theme="lightgreen" short={true} wide={true} center={false}>
	<p class="text-big">
		This is a large, left-aligned text caption
	</p>
</Filler>

<div class="center">
	<h2>Where are the traffic stops over time?</h2>
</div>
<div class="row">
	<div class="column first-column">
		<LineChart />
	</div>
	<div class="column second-column">
		<LineChartMini />
	</div>
</div>

<div class="center">
	<h2>What are the outcomes of traffic outcomes by race?</h2>
	<br>
</div>
<div class="col-wide"><hr class="svelte-1l2to1w" style="color: rgb(119, 119, 119);"> 
<Section>
	<Circles />
</Section>
</div>

<!-- Future D3 Chart visualizing proportion of officer stops involving force by calendar date -->
<!-- <div class="center">
	<h2>Is there a relationship between use of force and time of year?</h2>
	<br>
</div>
<div class="col-wide"><hr class="svelte-1l2to1w" style="color: rgb(119, 119, 119);"> 
<Section>
	<Calendar />
</Section>
</div> -->


<style>
	.row {
			display: flex;
		}

		.column {
			flex: 1; /* Allow columns to grow and shrink */
			padding: 0 10px; /* Add spacing between columns */
		}

		.first-column {
			flex: 65; /* Set the first column to occupy 70% of the width */
		}

		.second-column {
			flex: 35; /* Set the second column to occupy 30% of the width */
		}
	/* Styles specific to elements within the demo */
	:global(svelte-scroller-foreground) {
		pointer-events: none !important;
	}
	:global(svelte-scroller-foreground section div) {
		pointer-events: all !important;
	}
</style>
