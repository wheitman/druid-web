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
	import { fade, slide } from "svelte/transition";
	import { colors, primary } from "$lib/palettes";
	import showdown from "showdown";
	import { Dialog, Separator, Label } from "bits-ui";

	// import Webcam from 'webcam-easy';

	import ChoiceBubble from "$lib/bubbles/ChoiceBubble.svelte";

	onMount(() => {
		primary.set(colors.cove);
	});

	function say(text: string) {
		var converter = new showdown.Converter();
		let html = converter.makeHtml(text);
		return html;
	}

	const items = [
		{
			title: "Acknowledgements and License",
			content:
				"To become a better person, to help others, and to leave the world a better place than you found it.",
		},
	];
</script>

<svelte:head>
	<title>Druid</title>
	<meta
		name="description"
		content="Plant identification tool that runs on device"
	/>
</svelte:head>

<div class="h-[98vh] w-full" style="">
	<img
		src="res/druid-new.svg"
		alt="A wizard with a green robe, a green pointy hat with a leaf pattern, and a big white beard."
		class="h-96 mx-auto pt-16"
	/>
	<p class="mx-auto p-8 text-center">
		{@html say(
			`
Greetings. I'm **Druid**, your virtual companion to the natural world.
I am well-versed in the arts of [plant identification](/druid-web/plant-analysis) and [soil analysis](/druid-web/soil-analysis).`,
		)}
	</p>

	<Dialog.Root>
		<Dialog.Trigger
			class="h-12 w-full opacity-50 fixed bottom-20 left-0 mx-auto
		text-center px-[21px] text-sky-600 shadow-mini transition-colors hover:italic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98"
		>
			Acknowledgements, license, and more
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay
				transition={fade}
				transitionConfig={{ duration: 150 }}
				class="fixed inset-0 z-50 bg-black/80"
			/>
			<Dialog.Content
				transition={fade}
				class="fixed left-[50%] top-[50%] z-50 w-full max-w-[94%] translate-x-[-50%] translate-y-[-50%] rounded-lg borde bg-white p-5 shadow-popover outline-none sm:max-w-[490px] md:w-full"
			>
				<Dialog.Title
					class="flex w-full items-center justify-center text-lg font-semibold tracking-tight"
					>About Druid</Dialog.Title
				>
				<Separator.Root
					class="-mx-5 mb-6 mt-5 block h-px bg-slate-200"
				/>
				<Dialog.Description class="text-sm text-foreground-alt">
					{@html say(`
## Acknowledgements

Druid's magical powers all come from the open source community.

The frontend was built using [Svelte](https://svelte.dev/) and [SvelteKit](https://kit.svelte.dev/) using Typescript and [Tailwind CSS](https://tailwindcss.com/).

Graphics were made with Blender and Inkscape.

The AI runs on the [ONNX Runtime](https://github.com/microsoft/onnxruntime) and was trained using PyTorch.

Plant descriptions come from Wikipedia. Plant training data comes from the [PlantNet-300K dataset](https://github.com/plantnet/PlantNet-300K).

## License and source code

The license and source code are viewable [on GitHub](https://github.com/wheitman/druid-web).
					`)}
				</Dialog.Description>

				<Dialog.Close
					class="absolute right-5 top-5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98"
				>
					<div>
						<span class="material-symbols-outlined"> close </span>
						<span class="sr-only">Close</span>
					</div>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
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
