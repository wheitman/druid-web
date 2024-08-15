<script lang="ts">
    import { colors, primary } from "$lib/palettes";
    import { fade, crossfade, fly } from "svelte/transition";

    import { quintOut } from "svelte/easing";
    export let isResponse: boolean = false;
    export let skipTransitionDelay: boolean = false;

    export let enabled: boolean = true;

    const [fadeSend, fadeReceive] = crossfade({
        duration: 500,
        easing: quintOut,
    });
    let key = "key";

    let bgColor: string;
    let textColor: string;
    export let choices;
    let finalChoice;

    primary.subscribe((value) => {
        let colorString = value[400];
        bgColor = "#ffffff";
        textColor = colorString;
        let hoverColor = value[500];
    });

    function handleChoice(choice: any) {
        enabled = false;
        finalChoice = choice;
        choice.cb();
    }

    // if (isResponse) borderColor = colorString;
    // else borderColor = "#ffffff";
</script>

<div
    class="flex flex-row m-2 justify-end"
    transition:fly={{ delay: skipTransitionDelay ? 0 : 500, duration: 500 }}
>
    {#if enabled}
        <div
            class="rounded-xl ml-2 p-4 flex flex-col"
            class:mr-8={isResponse}
            class:ml-8={!isResponse}
            style="background-color: {bgColor}; border-color: {$primary}; border-width: 0.15rem; color: {textColor};"
        >
            {#each choices as choice}
                <button
                    class="flex flex-row py-1"
                    on:click={handleChoice(choice)}
                >
                    <span
                        class="material-symbols-outlined {$primary[400]} mr-2"
                    >
                        {choice.icon}
                    </span>
                    {choice.text}
                </button>
            {/each}
        </div>
    {:else}
        <div
            class="rounded-xl ml-2 p-4 flex flex-col opacity-50"
            class:mr-8={isResponse}
            class:ml-8={!isResponse}
            style="background-color: {bgColor};  color: {textColor};"
            transition:fly={{ delay: 0, duration: 500 }}
        >
            <button class="flex flex-row py-1">
                <span class="material-symbols-outlined {$primary[400]} mr-2">
                    {finalChoice.icon}
                </span>
                {finalChoice.text}
            </button>
        </div>
    {/if}
</div>

<style lang="postcss">
</style>
