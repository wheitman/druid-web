<script>
	import { onNavigate } from "$app/navigation";
	import "../app.css";
	import Navbar from "$lib/Navbar.svelte";

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="app">
	<main>
		<slot />
		<Navbar />
	</main>

	<!-- Now Entering: Jankville -->
	<div class="hidden">
		<div class="bg-teal-300"></div>
		<div class="bg-red-300"></div>
		<div class="bg-yellow-300"></div>
		<div class="bg-green-300"></div>
		<div class="bg-blue-300"></div>
		<div class="bg-purple-300"></div>
		<div class="bg-orange-300"></div>
		<div class="bg-slate-300"></div>
		<div class="bg-slate-400"></div>
	</div>
</div>
4

<style>
</style>
