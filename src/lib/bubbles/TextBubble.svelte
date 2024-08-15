<script lang="ts">
    import { colors, primary } from "$lib/palettes";
    export let isResponse: boolean = false;
    import { fade, crossfade, fly } from "svelte/transition";

    let bgColor: string;
    let textColor: string;
    export let skipTransitionDelay: boolean = false;
    export let text;

    primary.subscribe((value) => {
        let colorString = value[400];
        if (isResponse) bgColor = colorString;
        else bgColor = "#ffffff";
        if (isResponse) textColor = "#ffffff";
        else textColor = colorString;
    });

    // if (isResponse) borderColor = colorString;
    // else borderColor = "#ffffff";
</script>

<div
    class="flex flex-row m-2 items-end"
    transition:fly={{ delay: skipTransitionDelay ? 0 : 500, duration: 500 }}
>
    {#if isResponse}
        <img src="druid-new-thick.svg" alt="" class="max-w-16" />
    {/if}
    <div
        class="rounded-xl ml-2 p-4"
        class:mr-8={isResponse}
        class:ml-8={!isResponse}
        style="background-color: {bgColor}; border-color: {$primary}; border-width: 0.15rem; color: {textColor};"
    >
        {text}
    </div>
</div>

<style lang="postcss">
</style>
