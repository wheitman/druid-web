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

	onMount(() => {
		main();
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<!-- <img src="src/lib/images/1397613.jpg" id="input-img" alt="Network input" /> -->
	<!-- <img src="src/lib/images/1497667.jpg" id="input-img" alt="Network input" /> -->
	<img src="src/lib/images/1359483.jpg" id="input-img" alt="Network input" />
	<p>Hm... Could it be...</p>
	<div
		id="button-group"
		class="absolute bottom-0 w-full flex flex-col items-center py-4 px-4"
	>
		<Button
			><span class="text-4xl"
				>Next image <img
					src={shuffle_svg}
					class="h-10 inline pl-4"
					alt=""
				/></span
			></Button
		>
		<Button
			><span class="text-4xl"
				>Use camera <img
					src={camera_svg}
					class="h-10 inline pl-4"
					alt=""
				/></span
			></Button
		>
		<Button type="primary"
			><span class="text-4xl font-bold"
				>Identify <img
					src={magnifying_svg}
					class="h-10 inline pl-4"
					alt=""
				/></span
			></Button
		>
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
