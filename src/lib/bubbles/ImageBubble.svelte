<script lang="ts">
    import { colors, primary } from "$lib/palettes";
    import { fade, crossfade, fly } from "svelte/transition";

    export let isResponse: boolean = false;

    let bgColor: string;
    let textColor: string;

    primary.subscribe((value) => {
        let colorString = value[500];
        if (isResponse) bgColor = colorString;
        else bgColor = "#ffffff";
        if (isResponse) textColor = "#ffffff";
        else textColor = colorString;
    });

    export let imageUrl;

    // if (isResponse) borderColor = colorString;
    // else borderColor = "#ffffff";
</script>

<!-- <div
    class="rounded-xl m-4 bg-clip-border"
    class:mr-8={isResponse}
    class:ml-8={!isResponse}
    style="background-color: {bgColor}; border-color: {$primary}; border-width: 0.15rem; color: {textColor};"
>
    <img src="plants/1357652.jpg" alt="" class="rounded-lg" />
</div> -->

<div
    class="rounded-xl m-4 bg-clip-border h-48 specimen-div"
    class:mr-8={isResponse}
    class:ml-8={!isResponse}
    style="background-color: {bgColor}; border-color: {$primary}; border-width: 0.15rem; color: {textColor}; background-image: url({imageUrl}); background-size: cover; background-position: center center;  "
    transition:fly={{ delay: 0, duration: 500 }}
></div>

<style lang="postcss">
</style>
