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
    import ForestGrid from "$lib/forest_planner/ForestGrid.svelte";
    import SocketClient from "$lib/SocketClient.svelte";

    let forest_grid: ForestGrid;
    let socket_client: SocketClient;
    let state: number[];
</script>

<svelte:head>
    <title>Forest Map</title>
    <meta
        name="description"
        content="Plant identification tool that runs on device"
    />
</svelte:head>

<section class="flex flex-col items-center">
    <ForestGrid bind:this={forest_grid} />
    <SocketClient
        bind:this={socket_client}
        on:action={(e) => {
            state = forest_grid.handleActionEvent(e);
            socket_client.sendState(state);
        }}
    />
</section>

<style>
</style>
