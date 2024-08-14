<script lang="ts">
    import { Button } from "bits-ui";
    import "../app.css";

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
            name: "Plant Analysis",
            path: "plant-analysis",
            icon: "yard",
            color: "cambridge",
        },
        {
            name: "Soil Analysis",
            path: "soil-analysis",
            icon: "yard",
            color: "clay",
        },
    ];

    let pageIndex = 0; // Start on the first page

    function nextPage() {
        pageIndex++;
        wrapPageIndex();
        console.log(
            `Page is now ${pageIndex}. Color is ${pages[pageIndex].color}. Text is now text-${pages[pageIndex].color}-300`,
        );
    }

    function previousPage() {
        pageIndex--;
        wrapPageIndex();
        console.log(`Page is now ${pageIndex}`);
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
    class="bg-slate-400 h-16 drop-shadow-lg bottom-0 absolute w-full flex flex-row items-center justify-between gap-x-2"
>
    <Button.Root
        class="inline-flex h-full items-center justify-center rounded-input bg-dark
px-[21px] text-[15px] font-semibold text-background shadow-mini
hover:{backgroundColor(100)}  active:{backgroundColor(200)} duration-0"
        on:click={nextPage}
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

<style>
</style>
