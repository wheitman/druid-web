<script lang="ts">
    import { colors, primary } from "$lib/palettes";
    import { fade, crossfade, fly } from "svelte/transition";

    import { quintOut } from "svelte/easing";
    export let isResponse: boolean = false;
    export let skipTransitionDelay: boolean = false;

    export let enabled: boolean = true;
    export let icon: string = "send";

    const [fadeSend, fadeReceive] = crossfade({
        duration: 500,
        easing: quintOut,
    });
    let key = "key";

    export let cb; // callback

    let bgColor: string;
    let textColor: string;
    let finalChoice: any;

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

    let urlIsValid: boolean = false;
    let formChanged: boolean = false;

    function validateUrl() {
        let str = document.getElementById("urlInput").value;
        var a = document.createElement("a");
        a.href = str;
        urlIsValid = a.host && a.host != window.location.host;
        console.log(urlIsValid);
    }

    function submit() {
        cb(document.getElementById("urlInput").value);
        enabled = false;
        4;
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
            <div class="flex flex-row">
                <!-- svelte-ignore a11y-autofocus -->
                <input
                    type="url"
                    id="urlInput"
                    class="invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="Image URL"
                    required
                    autofocus
                    on:input={validateUrl}
                    on:change={() => {
                        formChanged = true;
                    }}
                />
                <button
                    disabled={!urlIsValid}
                    class="disabled:opacity-35"
                    on:click={submit}
                >
                    <span
                        class="material-symbols-outlined {$primary[400]} mr-2"
                    >
                        {icon}
                    </span>
                </button>
            </div>
            {#if formChanged && !urlIsValid}
                <p class="text-sm text-red-600">
                    URL should start with https:// or http://
                </p>
            {/if}
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
                    send
                </span>
                Submitted URL
            </button>
        </div>
    {/if}
</div>

<style lang="postcss">
</style>
