<script lang="ts">
    import { Button } from "bits-ui";
    import "../app.css";
    import { colors, primary } from "$lib/palettes";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    
</script>

<div
    class="h-16 drop-shadow-lg bottom-0 absolute w-full flex flex-row items-center justify-between gap-x-2"
    style="background-color: {$primary['100']};"
>
    <Button.Root
        class="inline-flex h-full items-center justify-center rounded-input bg-dark
px-[21px] text-[15px] font-semibold text-background shadow-mini duration-0"
        on:click={previousPage}
    >
        <span class="material-symbols-outlined"> chevron_left </span>
    </Button.Root>
    <span class="material-symbols-outlined {textColor(400)}">
        {pages[pageIndex].icon}
    </span>
    <p class="text-xl {textColor(600)}">
        {pages[pageIndex].name}
    </p>
    <Button.Root
        class="inline-flex h-full items-center justify-center rounded-input bg-dark
  px-[21px] text-[15px] font-semibold text-background shadow-mini
  hover:{backgroundColor(100)}  active:{backgroundColor(200)} duration-0"
        on:click={nextPage}
    >
        <span class="material-symbols-outlined"> chevron_right </span>
    </Button.Root>
</div>

<style lang="postcss">
</style>
