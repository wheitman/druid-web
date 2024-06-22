<script lang="ts">
    import { onMount } from "svelte";
    import Button from "$lib/Button.svelte";
    import back_svg from "$lib/images/back.svg";
    import camera_svg from "$lib/images/camera.svg";
    import circle_svg from "$lib/images/circle.svg";
    import flip_svg from "$lib/images/flip.svg";
    import magnifying_svg from "$lib/images/magnifying-glass.svg";
    import shuffle_svg from "$lib/images/shuffle.svg";
    import snap_mp3 from "$lib/audio/snap.mp3";

    export let size_px = 400;
    export let cell_size_px = 1;

    let grass_color = "#cdebb0";
    let forest_color = "#add19e";
    let dark_forest_color = "#97bd83";

    let width = Math.floor(size_px / cell_size_px); // cells
    let height = Math.floor(size_px / cell_size_px); // cells

    onMount(() => {
        let canvas: HTMLCanvasElement;
        canvas = <HTMLCanvasElement>document.getElementById("forest-canvas");

        let ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
        ctx.fillStyle = forest_color;

        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                let choice = Math.random();

                if (choice > 0.9) {
                    ctx.fillStyle = dark_forest_color;
                } else if (choice > 0.8) {
                    ctx.fillStyle = forest_color;
                } else {
                    ctx.fillStyle = grass_color;
                }

                ctx.fillRect(
                    j * cell_size_px,
                    i * cell_size_px,
                    cell_size_px,
                    cell_size_px,
                );
            }
        }
    });
</script>

<canvas id="forest-canvas" width={size_px} height={size_px}></canvas>

<style>
    #forest-canvas {
        border: 2px solid black;
    }
</style>
