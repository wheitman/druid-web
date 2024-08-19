<script lang="ts">
    import { colors, primary } from "$lib/palettes";
    export let isResponse: boolean = false;
    import { fade, crossfade, fly } from "svelte/transition";

    let bgColor: string;
    let textColor: string;
    let copiedVisible = false;
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

    async function shareReport() {
        await navigator.share({
            title: "Druid Soil Report",
            text:
                text +
                "\n From your favorite wizard. https://heit.mn/druid-web",
        });
    }

    async function copyToClipboard() {
        navigator.clipboard.writeText(
            text + "\n From your favorite wizard. https://heit.mn/druid-web",
        );
        copiedVisible = true;
        setTimeout(() => (copiedVisible = false), 1000);
    }
</script>

<div
    class="flex flex-row m-2 items-end mb-0"
    style="background-image: url(res/orange-paper-light.png); background-size: cover; clip-path: polygon(0% 0%, 4% 1%, 9% 0%, 13% 3%, 19% 1%, 24% 3%, 28% 4%, 36% 1%, 43% 3%, 49% 1%, 55% 3%, 61% 1%, 67% 3%, 74% 1%, 79% 3%, 85% 1%, 91% 4%, 95% 1%, 100% 0%, 100% 100%, 96% 99%, 90% 99%, 86% 99%, 80% 97%, 74% 97%, 69% 98%, 64% 95%, 61% 99%, 54% 96%, 47% 98%, 41% 94%, 35% 98%, 28% 96%, 24% 99%, 16% 94%, 12% 98%, 6% 99%, 0% 94%); "
    transition:fly={{ delay: skipTransitionDelay ? 0 : 500, duration: 500 }}
>
    <p class="font-mono py-4 px-8 whitespace-pre font-medium">{text}</p>
</div>
<div
    class="rounded-xl ml-2 flex flex-row justify-end"
    class:mr-8={isResponse}
    class:ml-8={!isResponse}
    style="color: {$primary[400]};"
>
    <button class="flex flex-row py-1 text-sm" on:click={shareReport}>
        <span class="material-symbols-outlined text-sm {$primary[400]} mr-2">
            share
        </span>
        Share
    </button>
    <button class="flex flex-row py-1 text-sm ml-6" on:click={copyToClipboard}>
        {#if copiedVisible}
            <p
                transition:fly={{ delay: 150, duration: 100 }}
                class=" text-cambridge-500"
            >
                <span
                    class="material-symbols-outlined text-sm {$primary[400]} mr-2"
                >
                    check
                </span>
                Copied to clipboard
            </p>
        {:else}
            <p transition:fly={{ delay: 150, duration: 100 }} class="">
                <span
                    class="material-symbols-outlined text-sm {$primary[400]} mr-2"
                >
                    content_paste
                </span>
                Copy to clipboard
            </p>
        {/if}
    </button>
</div>

<style lang="postcss">
</style>
