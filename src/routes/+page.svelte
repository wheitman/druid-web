<script lang="ts">
	import { main } from "./predict";
	import { onMount } from "svelte";
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
		// const webcamElement = document.getElementById("webcam");
		// const canvasElement = document.getElementById("canvas");
		// const snapSoundElement = document.getElementById("snapSound");
		// webcam = new Webcam(
		// 	webcamElement,
		// 	"user",
		// 	canvasElement,
		// 	snapSoundElement,
		// );
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

	import { Accordion } from "bits-ui";
</script>

<svelte:head>
	<title>Druid</title>
	<meta
		name="description"
		content="Plant identification tool that runs on device"
	/>
</svelte:head>

<Accordion.Root>
	<Accordion.Item value="first">
		<Accordion.Header>
			<Accordion.Trigger class="text-xl text-cambridge-500"
				>First</Accordion.Trigger
			>
		</Accordion.Header>
		<Accordion.Content>First accordion content</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="second">
		<Accordion.Header>
			<Accordion.Trigger>Second</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content>Second accordion content</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="third">
		<Accordion.Header>
			<Accordion.Trigger>Third</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content>Third accordion content</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>

<style>
</style>
