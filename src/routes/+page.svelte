<script lang="ts">
	import { startPlantnetPrediction } from "./predict";
	import { onMount } from "svelte";
	import back_svg from "$lib/images/back.svg";
	import camera_svg from "$lib/images/camera.svg";
	import circle_svg from "$lib/images/circle.svg";
	import flip_svg from "$lib/images/flip.svg";
	import magnifying_svg from "$lib/images/magnifying-glass.svg";
	import shuffle_svg from "$lib/images/shuffle.svg";
	import snap_mp3 from "$lib/audio/snap.mp3";
	import { colors, primary } from "$lib/palettes";

	// import Webcam from 'webcam-easy';

	import ChoiceBubble from "$lib/bubbles/ChoiceBubble.svelte";

	onMount(() => {
		primary.set(colors.cove);
	});
</script>

<svelte:head>
	<title>Druid</title>
	<meta
		name="description"
		content="Plant identification tool that runs on device"
	/>
</svelte:head>

<div class="h-[98vh] w-full" style="background-color: {$primary[50]};">
	<img
		src="res/druid-new.svg"
		alt="A wizard with a green robe, a green pointy hat with a leaf pattern, and a big white beard."
		class="h-96 mx-auto pt-16"
	/>
	<p class="mx-auto p-8 text-center">
		I am your virtual companion to the natural world. I am trained in the
		arts of <strong>plant identification</strong> and
		<strong>soil analysis</strong>, though I am always learning new forms of
		magic.
	</p>
</div>

<!-- <ChoiceBubble choices={[
                {
                    text: "New plant",
                    icon: "psychiatry",
                    cb: addSpecimenPromptBubble,
                },
                // { text: "Use camera", icon: "photo_camera" },
            ]}/> -->

<style>
</style>
