<script lang="ts">
    import { Button } from "bits-ui";
    import "../app.css";
    import { colors, primary } from "$lib/palettes";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    let currentColor = colors.cove;
    primary.subscribe((value) => {
        currentColor = value;
    });

    function textColor(level: number): string {
        let color = pages[pageIndex].color;

        return `text-${color}-${level}`;
    }

    function backgroundColor(level: number): string {
        let color = pages[pageIndex].color;

        return `bg-${color}-${level}`;
    }

    const pages = [
        {
            name: "Home",
            path: "/",
            icon: "cottage",
            color: colors.cove,
        },
        {
            name: "Plant Analysis",
            path: "/plant-analysis",
            icon: "yard",
            color: colors.cambridge,
        },
        {
            name: "Soil Analysis",
            path: "/soil-analysis",
            icon: "landscape_2",
            color: colors.clay,
        },
    ];

    let pageIndex = 0; // Start on the first page
    let baseurl = "/druid-web";

    function nextPage() {
        pageIndex++;
        wrapPageIndex();

        goto(baseurl + pages[pageIndex].path);
    }

    function previousPage() {
        pageIndex--;
        wrapPageIndex();
        goto(baseurl + pages[pageIndex].path);
    }

    function wrapPageIndex() {
        if (pageIndex < 0) {
            pageIndex += pages.length;
        } else if (pageIndex >= pages.length) {
            pageIndex -= pages.length;
        }
    }
</script>

<div
    class="h-16 drop-shadow-lg bottom-0 fixed w-full mx-auto max-w-[50vh] flex flex-row items-center justify-between gap-x-2"
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
