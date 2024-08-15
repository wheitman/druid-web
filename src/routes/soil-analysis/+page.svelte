<script lang="ts">
    import { colors, primary } from "$lib/palettes";
    import { onMount } from "svelte";

    onMount(() => {
        primary.set(colors.clay);
    });
</script>

<svelte:head>
    <title>Soil Analysis - Druid</title>
    <meta
        name="description"
        content="Plant identification tool that runs on device"
    />
</svelte:head>

Soil Analysis :P

<style>
</style>
