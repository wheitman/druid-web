<script>
	import Counter from "./Counter.svelte";
	import welcome from "$lib/images/svelte-welcome.webp";
	import welcome_fallback from "$lib/images/svelte-welcome.png";
	import { main } from "./predict";
	import { onMount } from "svelte";
	import Button from "$lib/Button.svelte";
	import shuffle_svg from "$lib/images/shuffle.svg";
	import camera_svg from "$lib/images/camera.svg";
	import magnifying_svg from "$lib/images/magnifying-glass.svg";
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

	let webcam;

	onMount(() => {
		changeImage();
		main();
		const webcamElement = document.getElementById("webcam");
		const canvasElement = document.getElementById("canvas");
		const snapSoundElement = document.getElementById("snapSound");
		webcam = new Webcam(
			webcamElement,
			"user",
			canvasElement,
			snapSoundElement,
		);
	});
	function startCamera() {
		webcam
			.start()
			.then((result) => {
				console.log("webcam started");
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function changeImage() {
		console.log("Choosing random image.");
		let image_id = image_ids[Math.floor(Math.random() * image_ids.length)];
		image_path = `src/lib/images/plants/${image_id}.jpg`;
		species_name = "Mystery plant";
	}

	async function makePrediction() {
		species_name = await main();
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<!-- <img src="src/lib/images/1397613.jpg" id="input-img" alt="Network input" /> -->
	<!-- <img src="src/lib/images/1497667.jpg" id="input-img" alt="Network input" /> -->
	<video id="webcam" autoplay playsinline width="640" height="640"
		><track kind="captions" /></video
	>

	<!-- <canvas id="canvas" class="d-none"></canvas> -->
	<audio id="snapSound" src="audio/snap.wav" preload="auto"></audio>
	<img src={image_path} id="input-img" alt="Network input" />
	<p class="text-4xl italic">{species_name}</p>
	<div
		id="button-group"
		class="absolute sm:relative bottom-0 w-full flex flex-col items-center py-4 px-4"
	>
		<Button on:click={changeImage}
			><span
				>Change image <img
					src={shuffle_svg}
					class="h-10 sm:h-6 inline pl-1"
					alt=""
				/></span
			></Button
		>
		<Button on:click={startCamera}
			><span
				>Use camera <img
					src={camera_svg}
					class="h-10 sm:h-6 inline pl-1"
					alt=""
				/></span
			></Button
		>
		<Button type="primary" on:click={makePrediction}
			><span
				>Identify <img
					src={magnifying_svg}
					class="h-10 sm:h-6 inline pl-1"
					alt=""
				/></span
			></Button
		>

		<canvas id="input-canvas" width="224" height="224" class="hidden"
		></canvas>
	</div>

	<!-- <canvas id="input-canvas" width="224" height="224"></canvas> -->
	<!-- <Counter /> -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
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
</style>
