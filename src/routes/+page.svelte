<script>
	import Counter from "./Counter.svelte";
	import welcome from "$lib/images/svelte-welcome.webp";
	import welcome_fallback from "$lib/images/svelte-welcome.png";
	import { main } from "./predict";
	import { onMount } from "svelte";
	import Button from "$lib/Button.svelte";
	import CircleButton from "$lib/CircleButton.svelte";
	import back_svg from "$lib/images/back.svg";
	import camera_svg from "$lib/images/camera.svg";
	import circle_svg from "$lib/images/circle.svg";
	import flip_svg from "$lib/images/flip.svg";
	import magnifying_svg from "$lib/images/magnifying-glass.svg";
	import shuffle_svg from "$lib/images/shuffle.svg";
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
	let multiple_cameras = false;

	let webcam_enabled = false;
	let show_species_details = false;
	let species_description = "";
	let wiki_page_id = 0;

	let webcam;

	function startCamera() {
		const webcamElement = document.getElementById("webcam");
		const canvasElement = document.getElementById("canvas");
		const snapSoundElement = document.getElementById("snapSound");
		webcam = new Webcam(
			webcamElement,
			"user",
			canvasElement,
			snapSoundElement,
		);
		webcam_enabled = true;
		webcam
			.start()
			.then((result) => {
				console.log("webcam started");
			})
			.catch((err) => {
				console.log(err);
			});

		multiple_cameras = webcam.webcamList.length > 1;
	}

	function stopCamera() {
		webcam_enabled = false;
		webcam.stop();
	}

	onMount(() => {
		changeImage();

		startCamera();
	});

	function goToWikipedia() {
		window.location.href = `http://en.wikipedia.org/wiki?curid=${wiki_page_id}`;
	}

	function changeImage() {
		console.log("Choosing random image.");
		let image_id = image_ids[Math.floor(Math.random() * image_ids.length)];
		image_path = `src/lib/images/plants/${image_id}.jpg`;
		species_name = "Mystery plant";
		show_species_details = false;
	}

	async function makePrediction() {
		species_name = await main();
		let wiki_results = await searchWikipedia(species_name);
		stopCamera();
		console.log(wiki_results.query);
		species_description = wiki_results.query.search[0].snippet;
		wiki_page_id = wiki_results.query.search[0].pageid;
		const species_element = document.getElementById("species-desc");
		species_element.innerHTML =
			wiki_results.query.search[0].snippet + "...";
		show_species_details = true;
	}

	async function searchWikipedia(searchQuery) {
		const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw Error(response.statusText);
		}
		const json = await response.json();
		return json;
	}

	function hideSpeciesDetails() {
		show_species_details = false;
		console.log("Species details hidden");
	}

	async function takePicture() {
		let picture = webcam.snap();
		image_path = picture;
		console.log(picture);
		let blob = dataURItoBlob(picture);
		let arr = new Uint8Array(await blob.arrayBuffer());
		console.log(arr);
		stopCamera();
		webcam_enabled = false;
	}

	function flipCamera() {
		webcam.flip();
		webcam.start();
		console.log("Webcam flipped");
	}

	function dataURItoBlob(dataURI) {
		// convert base64 to raw binary data held in a string
		// doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
		var byteString = atob(dataURI.split(",")[1]);

		// separate out the mime component
		var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

		// write the bytes of the string to an ArrayBuffer
		var ab = new ArrayBuffer(byteString.length);

		// create a view into the buffer
		var ia = new Uint8Array(ab);

		// set the bytes of the buffer to the correct values
		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}

		// write the ArrayBuffer to a blob, and you're done
		var blob = new Blob([ab], { type: mimeString });
		return blob;
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<!-- <img src="src/lib/images/1397613.jpg" id="input-img" alt="Network input" /> -->
	<!-- <img src="src/lib/images/1497667.jpg" id="input-img" alt="Network input" /> -->
	<video
		class:hidden={!webcam_enabled}
		class="rounded-lg"
		id="webcam"
		autoplay
		playsinline
		width="640"
		height="640"><track kind="captions" /></video
	>

	<canvas id="canvas" class="hidden"></canvas>
	<audio id="snapSound" src="audio/snap.wav" preload="auto"></audio>
	<img
		class:hidden={webcam_enabled}
		src={image_path}
		id="input-img"
		alt="Network input"
	/>
	<p
		class="text-2xl italic font-semibold text-center"
		class:hidden={webcam_enabled}
	>
		{species_name}
	</p>
	<p class="text-md" id="species-desc" class:hidden={!show_species_details}>
		<!-- {species_description} -->
	</p>
	<div
		id="button-group"
		class:hidden={webcam_enabled || show_species_details}
		class="absolute sm:relative bottom-0 w-full flex flex-col items-center py-1 px-4"
	>
		<Button on:click={changeImage}
			><span
				><img
					src={shuffle_svg}
					class="h-10 sm:h-6 inline pr-4"
					alt=""
				/>Change image
			</span></Button
		>
		<Button on:click={startCamera}
			><span
				><img
					src={camera_svg}
					class="h-10 sm:h-6 inline pr-4"
					alt=""
				/>Use camera
			</span></Button
		>
		<Button type="primary" on:click={makePrediction}
			><span
				><img
					src={magnifying_svg}
					class="h-10 sm:h-6 inline pr-4"
					alt=""
				/>Identify
			</span></Button
		>

		<canvas id="input-canvas" width="224" height="224" class="hidden"
		></canvas>
	</div>
	<div
		id="button-group"
		class:hidden={!webcam_enabled}
		class="absolute bottom-0 w-full max-w-[45vh] flex flex-row items-center place-content-around py-4 px-auto"
	>
		<button class="w-16 h-16" on:click={stopCamera}>
			<img src={back_svg} alt="" />
		</button>
		<button class="w-16 h-16" on:click={takePicture}>
			<img src={circle_svg} alt="" />
		</button>
		<button
			class="w-16 h-16"
			class:opacity-30={!multiple_cameras}
			on:click={flipCamera}
			disabled={!multiple_cameras}
		>
			<img src={flip_svg} alt="" />
		</button>

		<canvas id="input-canvas" width="224" height="224" class="hidden"
		></canvas>
	</div>

	<div
		id="button-group"
		class:hidden={!show_species_details}
		class="absolute bottom-0 w-full max-w-[45vh] flex flex-col items-center place-content-around py-4 px-auto"
	>
		<Button on:click={goToWikipedia}><span>Go to Wikipedia</span></Button>
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
