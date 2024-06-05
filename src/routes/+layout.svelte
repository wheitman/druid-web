<script>
	import Header from "./Header.svelte";
	import "./styles.css";
	import "../app.css";
</script>

<div class="app">
	<main class="sm:rounded-3xl mx-auto sm:my-10">
		<slot />
	</main>

	<!-- <footer>
		<p>
			visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
		</p>
	</footer> -->
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 45vh;
		/* max-width: 64rem;1 */
		/* margin: 1rem auto; */
		box-sizing: border-box;
		/* background-color: #cce2f5; */
		/* border-radius: 2rem; */
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
