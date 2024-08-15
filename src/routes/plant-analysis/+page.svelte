<script lang="ts">
    import { colors, primary } from "$lib/palettes";
    import { onMount } from "svelte";
    import ChatBubble from "$lib/ChatBubble.svelte";
    import ImageBubble from "$lib/bubbles/ImageBubble.svelte";

    let bubbles = [
        [ImageBubble, {}],
        [ChatBubble, { isResponse: true }],
        [ChatBubble, {}],
    ];

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

{#each bubbles as [bubble, props]}
    <svelte:component this={bubble} {...props}>
        (Slotted content)
    </svelte:component>
{/each}

<style>
</style>
