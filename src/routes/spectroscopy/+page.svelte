<script lang="ts">
	import { main } from "./predict";
	import { onMount } from "svelte";
	import Chart from "chart.js/auto";

	import Button from "$lib/Button.svelte";
	import back_svg from "$lib/images/back.svg";
	import camera_svg from "$lib/images/camera.svg";
	import circle_svg from "$lib/images/circle.svg";
	import flip_svg from "$lib/images/flip.svg";
	import magnifying_svg from "$lib/images/magnifying-glass.svg";
	import shuffle_svg from "$lib/images/shuffle.svg";
	import snap_mp3 from "$lib/audio/snap.mp3";
	import scans from "./scans.json";
	import minmax from "./minmax.json";
	// import Webcam from 'webcam-easy';

	let image_ids = [
		"1391963",
		"1355990",
		"1357652",
		"1358105",
		"1359483",
		"1363021",
		"1364165",
		"1385937",
		"1391963",
		"1397613",
		"1497667",
	];
	let image_path = "";
	let species_name = "Mystery plant";
	let species_prob = 0;
	let multiple_cameras = false;

	let webcam_enabled = false;
	let show_species_details = false;

	let prediction_in_progress = false;

	let show_start = true;
	let selected_scan: Array<number> = [];

	let organic_carbon = -1.0;
	let nitrogen = -1.0;
	let potassium = -1.0;
	let phosphates = -1.0;
	let sand = -1.0;
	let clay = -1.0;
	let silt = -1.0;
	let course_fragments = -1.0;
	let cec = -1.0;

	let organic_carbon_percentile = -1.0;
	let nitrogen_percentile = -1.0;
	let potassium_percentile = -1.0;
	let phosphates_percentile = -1.0;
	let sand_percentile = -1.0;
	let clay_percentile = -1.0;
	let silt_percentile = -1.0;
	let course_fragments_percentile = -1.0;
	let cec_percentile = -1;
	let hide_results = true;

	let cambridge = "#5b916f";
	let chart;
	let doughnut;

	function linspace(
		startValue: number,
		stopValue: number,
		cardinality: number,
		round: boolean = true,
	) {
		var arr = [];
		var step = (stopValue - startValue) / (cardinality - 1);
		for (var i = 0; i < cardinality; i++) {
			let val = startValue + step * i;

			if (round) val = Math.round(val);
			arr.push(val);
		}
		return arr;
	}

	onMount(() => {
		console.log(scans);
		const ctx = document.getElementById("canvas");
		const doughnut_ctx = document.getElementById("doughnut-canvas");
		selected_scan = scans[Math.floor(Math.random() * scans.length)];

		chart = new Chart(ctx, {
			type: "line",
			data: {
				labels: linspace(400, 2500, 105),
				datasets: [
					{
						label: "Reflectance",
						data: preprocessChartData(selected_scan),
						borderWidth: 3,
						cubicInterpolationMode: "default",
						pointRadius: 0,
						pointHoverRadius: 10,
						pointHitRadius: 10,
						borderColor: cambridge,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
						suggestedMax: 70,
					},
				},
				plugins: {
					legend: {
						display: false,
					},
				},
			},
		});

		doughnut = new Chart(doughnut_ctx, {
			type: "doughnut",
			data: {
				labels: ["Sand", "Clay", "Silt", "Course Fragments"],
				datasets: [
					{
						// label: "My First Dataset",
						data: [300, 50, 100, 50],
						backgroundColor: [
							"#fde68a",
							"#c2410c",
							"#e5e7eb",
							"#78716c",
						],
						hoverOffset: 4,
					},
				],
			},
			options: {},
		});
	});

	async function makePrediction() {
		prediction_in_progress = true;

		// This is the MOST IMPORTANT LINE:
		// It actually runs the neural network
		let [results, result_percentiles] = await main(selected_scan, minmax);

		organic_carbon = results[0];
		nitrogen = results[1];
		potassium = results[2];
		phosphates = results[3];
		sand = results[4];
		clay = results[5];
		silt = results[6];
		course_fragments = results[7];
		cec = results[8];

		// console
		organic_carbon_percentile = result_percentiles[0];
		nitrogen_percentile = result_percentiles[1];
		potassium_percentile = result_percentiles[2];
		phosphates_percentile = result_percentiles[3];
		sand_percentile = result_percentiles[4];
		clay_percentile = result_percentiles[5];
		silt_percentile = result_percentiles[6];
		course_fragments_percentile = result_percentiles[7];
		cec_percentile = result_percentiles[8];

		updateDoughnut(results);

		prediction_in_progress = false;
		hide_results = false;
	}

	function hideSpeciesDetails() {
		show_species_details = false;
		console.log("Species details hidden");
	}

	function round(x: number) {
		return Math.round((x + Number.EPSILON) * 100) / 100;
	}

	function preprocessChartData(scan: number[], downsample_step: number = 10) {
		let processed_data: number[] = [];

		for (let i = 0; i < scan.length; i += downsample_step) {
			processed_data.push(scan[i] * 100);
		}

		return processed_data;
	}

	function changeScan() {
		selected_scan = scans[Math.floor(Math.random() * scans.length)];
		chart.data.datasets[0].data = preprocessChartData(selected_scan);
		chart.update();
		console.log("Reloaded chart");
	}

	function updateDoughnut(predictions: number[]) {
		let slices = [];
		for (let i = 4; i < 8; i++) {
			slices.push(predictions[i]);
		}

		doughnut.data.datasets[0].data = slices;
		doughnut.update();
	}
</script>

<svelte:head>
	<title>Druid Plant ID</title>
	<meta
		name="description"
		content="Plant identification tool that runs on device"
	/>
</svelte:head>

<section class="flex flex-col items-center place-content-between min-h-[95vh]">
	<!-- <img src="src/lib/images/1397613.jpg" id="input-img" alt="Network input" /> -->
	<!-- <img src="src/lib/images/1497667.jpg" id="input-img" alt="Network input" /> -->
	<div id="image-box" class="flex flex-col">
		<canvas id="canvas" width="480" height="320"></canvas>
	</div>
	<div
		id="results-box"
		class="w-full grid grid-rows-3 grid-cols-2"
		class:hidden={hide_results}
	>
		<div
			class="measurement flex flex-col items-center border-2 border-slate-200 rounded-md"
		>
			<div>Organic Carbon</div>
			<div class="text-5xl">{round(organic_carbon)} %</div>
			<div>{round(organic_carbon_percentile)}th percentile</div>
		</div>

		<div
			class="measurement flex flex-col items-center border-2 border-slate-200 rounded-md"
		>
			<div>Nitrogen</div>
			<div class="text-5xl">{round(nitrogen)} %</div>
			<div>{round(nitrogen_percentile)}th percentile</div>
		</div>

		<div
			class="measurement flex flex-col items-center border-2 border-slate-200 rounded-md"
		>
			<div>Potassium</div>
			<div class="text-5xl">{round(potassium)} %</div>
			<div>{round(potassium_percentile)}th percentile</div>
		</div>

		<div
			class="measurement flex flex-col items-center border-2 border-slate-200 rounded-md"
		>
			<div>Phosphates</div>
			<div class="text-5xl">{round(phosphates)} %</div>
			<div>{round(phosphates_percentile)}th percentile</div>
		</div>

		<div
			class="measurement flex flex-col items-center border-2 border-slate-200 rounded-md col-span-2"
		>
			<div>CEC</div>
			<div>
				<span class="text-5xl">{Math.round(cec)}</span>
				<span class="text-2xl">cmolc/kg</span>
			</div>
			<div>{round(cec_percentile)}th percentile</div>
		</div>
		<canvas id="doughnut-canvas" width="480" height="480"></canvas>
	</div>

	<div class:hidden={hide_results}></div>

	<div id="button-group" class="w-full flex flex-col items-center py-1 px-4">
		<Button on:click={changeScan}
			><span
				><img
					src={shuffle_svg}
					class="h-10 sm:h-6 inline pr-4"
					alt=""
				/>Load example
			</span></Button
		>
		<Button
			type="primary"
			on:click={makePrediction}
			loading={prediction_in_progress}
			><span
				><img
					src={magnifying_svg}
					class="h-10 sm:h-6 inline pr-4"
					alt=""
				/>Analyze
			</span></Button
		>

		<canvas id="input-canvas" width="224" height="224" class="hidden"
		></canvas>
	</div>

	<div
		id="button-group"
		class:hidden={!webcam_enabled || show_start}
		class="w-full flex flex-row items-center py-1 px-4 justify-around"
	>
		<!-- <button class="w-16 h-16" on:click={stopCamera}>
			<img src={back_svg} alt="" />
		</button>
		<button class="w-16 h-16" on:click={takePicture}>
			<img src={circle_svg} alt="" />
		</button>
		<button class="w-16 h-16" on:click={flipCamera}>
			<img src={flip_svg} alt="" />
		</button> -->

		<canvas id="input-canvas" width="224" height="224" class="hidden"
		></canvas>
	</div>

	<div
		id="button-group"
		class:hidden={!show_species_details}
		class="w-full flex flex-col items-center py-1 px-4"
	>
		<Button on:click={hideSpeciesDetails}
			><span
				><img
					src={back_svg}
					class="h-8 sm:h-6 inline pr-2"
					alt=""
				/>Search again
			</span></Button
		>
		<!-- <button class="w-16 h-16" on:click={hideSpeciesDetails}>
			<img src={back_svg} alt="" />
		</button> -->
	</div>
	<!-- <canvas id="input-canvas" width="224" height="224"></canvas> -->
	<!-- <Counter /> -->
</section>

<style>
	section {
	}

	#input-img {
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	#input-canvas {
		width: 224px;
		height: 224px;
	}

	.floating {
		animation-name: floating;
		animation-duration: 6s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		margin-left: 30px;
		margin-top: 5px;
	}

	@keyframes floating {
		0% {
			transform: translate(0, 0px);
		}
		50% {
			transform: translate(0, 15px);
		}
		100% {
			transform: translate(0, -0px);
		}
	}
</style>
