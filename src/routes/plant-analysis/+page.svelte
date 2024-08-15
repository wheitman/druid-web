<script lang="ts">
    import { colors, primary } from "$lib/palettes";
    import { onMount } from "svelte";

    onMount(() => {
        primary.set(colors.cambridge);
    });
</script>

<svelte:head>
    <title>Plant Analysis - Druid</title>
    <meta
        name="description"
        content="Plant identification tool that runs on device"
    />
</svelte:head>

Plant Analysis :P

<style>
</style>
