<script lang="ts">
    import { colors, primary } from "$lib/palettes";
    export let symbol: string = false;
    import { fade, crossfade, fly } from "svelte/transition";

    let bgColor: string;
    let textColor: string;
    export let skipTransitionDelay: boolean = false;
    export let text;

    primary.subscribe((value) => {
        let colorString = value[400];
        bgColor = "#ffffff";
        textColor = colorString;
    });

    // if (isResponse) borderColor = colorString;
    // else borderColor = "#ffffff";
</script>

<div
    class="flex flex-row items-center w-full text-slate-400 justify-center text-sm py-4"
    transition:fly={{ delay: skipTransitionDelay ? 0 : 250, duration: 500 }}
>
        <span class="material-symbols-outlined text-sm"> {symbol} </span>
        <p class="pl-1">{text}</p>
        
</div>

<style lang="postcss">
</style>
