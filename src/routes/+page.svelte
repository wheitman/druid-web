<script>
	import { main } from "./predict";
	import { onMount } from "svelte";
	import Button from "$lib/Button.svelte";
	import back_svg from "$lib/images/back.svg";
	import camera_svg from "$lib/images/camera.svg";
	import circle_svg from "$lib/images/circle.svg";
	import flip_svg from "$lib/images/flip.svg";
	import magnifying_svg from "$lib/images/magnifying-glass.svg";
	import shuffle_svg from "$lib/images/shuffle.svg";
	import snap_mp3 from "$lib/audio/snap.mp3";
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
	let species_description = "";
	let wiki_page_id = 0;

	let prediction_in_progress = false;

	let show_start = true;

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
		show_start = false;
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
		// changeImage();

		const webcamElement = document.getElementById("webcam");
		const canvasElement = document.getElementById("canvas");
		const snapSoundElement = document.getElementById("snapSound");
		webcam = new Webcam(
			webcamElement,
			"user",
			canvasElement,
			snapSoundElement,
		);

		// startCamera();
	});

	function goToWikipedia() {
		window.location.href = `http://en.wikipedia.org/wiki?curid=${wiki_page_id}`;
	}

	function changeImage() {
		show_start = false;
		console.log("Choosing random image.");
		let image_id = image_ids[Math.floor(Math.random() * image_ids.length)];
		image_path = `plants/${image_id}.jpg`;
		species_name = "Mystery plant";
		species_prob = 0;
		show_species_details = false;
	}

	async function makePrediction() {
		species_name = "Thinking... Please wait.";
		prediction_in_progress = true;

		// This is the MOST IMPORTANT LINE:
		// It actually runs the neural network
		[species_name, species_prob] = await main();
		species_prob = Math.floor(species_prob * 100);
		console.log(`SPECIES PROB: ${species_prob}`);

		// Simplify to just the genus and species
		let species_parts = species_name.split(" ");
		let genus = species_parts[0];
		let species = species_parts[1];
		species_name = genus + " " + species;

		let wiki_results = await searchWikipedia(species_name);
		stopCamera();
		console.log(wiki_results.query);
		// species_description = wiki_results.query.search[0].snippet;
		// wiki_page_id = wiki_results.query.search[0].pageid;
		const species_element = document.getElementById("species-desc");
		species_element.innerHTML = wiki_results;
		show_species_details = true;
		prediction_in_progress = false;
	}

	async function searchWikipedia(searchQuery) {
		const search_endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
		// const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
		let response = await fetch(search_endpoint);
		if (!response.ok) {
			throw Error(response.statusText);
		}
		let json = await response.json();

		console.log(json.query);
		wiki_page_id = json.query.search[0].pageid;

		const explain_text_endpoint = `https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro=1&explaintext=1&pageids=${wiki_page_id}`;
		response = await fetch(explain_text_endpoint);
		if (!response.ok) {
			throw Error(response.statusText);
		}
		json = await response.json();

		console.log(json);

		console.log(json.query.pages.length);

		return json.query.pages[wiki_page_id].extract;
		// if (json.query.pages.length > 0) {
		// } else {
		// 	return "No description available.";
		// }
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
		<video
			class:hidden={!webcam_enabled}
			class="rounded-xl"
			id="webcam"
			autoplay
			playsinline
			width="640"
			height="640"><track kind="captions" /></video
		>

		<canvas id="canvas" class="hidden"></canvas>
		<audio id="snapSound" src={snap_mp3} preload="auto"></audio>
		<img
			src="druid.svg"
			alt=""
			class:hidden={!show_start}
			class="max-h-[40vh] pt-4 pl-12 floating pb-8"
		/>
		<p class="text-2xl font-bold text-center" class:hidden={!show_start}>
			Hi, I'm Druid.
		</p>
		<p class="text-lg" class:hidden={!show_start}>
			I can help you identify 1081 species of plants using on-device AI,
			and then I find details on Wikipedia for you. I'm learning new
			species all the time. <a
				href="https://heit.mn/Plant-ID-in-the-browser"
				class="italic text-green-700">Details and acknowledgements</a
			>
		</p>
		<img
			class:hidden={webcam_enabled || show_start}
			src={image_path}
			id="input-img"
			alt="Network input"
			class="rounded-xl"
		/>
		<p
			class="text-2xl italic font-semibold text-center"
			class:hidden={webcam_enabled || show_start}
			class:animate-pulse={species_name == "Thinking... Please wait."}
		>
			{species_name}
		</p>
		<p
			class="text-center font-semibold text-green-600"
			class:hidden={species_prob < 1 || webcam_enabled || show_start}
			class:text-green-600={species_prob > 85}
			class:text-amber-600={species_prob < 50}
		>
			{species_prob}% match {#if species_prob < 60}
				<br />(I probably haven't learned about your plant yet)
			{/if}
		</p>

		<p
			class="text-md"
			id="species-desc"
			class:hidden={!show_species_details}
		>
			<!-- {species_description} -->
		</p>
	</div>
	<div
		id="button-group"
		class:hidden={!show_start}
		class="w-full flex flex-col items-center py-1 px-4"
	>
		<Button on:click={changeImage}
			><span
				><img
					src={shuffle_svg}
					class="h-10 sm:h-6 inline pr-4"
					alt=""
				/>Load example
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

		<canvas id="input-canvas" width="224" height="224" class="hidden"
		></canvas>
	</div>
	<div
		id="button-group"
		class:hidden={webcam_enabled || show_species_details || show_start}
		class="w-full flex flex-col items-center py-1 px-4"
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
		<Button
			type="primary"
			on:click={makePrediction}
			loading={prediction_in_progress}
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
		class:hidden={!webcam_enabled || show_start}
		class="w-full flex flex-row items-center py-1 px-4 justify-around"
	>
		<button class="w-16 h-16" on:click={stopCamera}>
			<img src={back_svg} alt="" />
		</button>
		<button class="w-16 h-16" on:click={takePicture}>
			<img src={circle_svg} alt="" />
		</button>
		<button class="w-16 h-16" on:click={flipCamera}>
			<img src={flip_svg} alt="" />
		</button>

		<canvas id="input-canvas" width="224" height="224" class="hidden"
		></canvas>
	</div>

	<div
		id="button-group"
		class:hidden={!show_species_details}
		class="w-full flex flex-col items-center py-1 px-4"
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
