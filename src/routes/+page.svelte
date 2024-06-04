<script>
	import Counter from "./Counter.svelte";
	import welcome from "$lib/images/svelte-welcome.webp";
	import welcome_fallback from "$lib/images/svelte-welcome.png";
	import { runModel } from "./predict";

	const [res, time] = runModel(session, data);
	var output = res.data;
	var inferenceTime = time;
	var results = softmax(Array.prototype.slice.call(output));

	var topResults = [];
	for (let i = 0; i < results.length; i++) {
		if (results[i] > 0.3) {
			topResults.push([classes[i] + ": " + results[i]]);
		}
	}

	console.log(topResults);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
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
</style>
