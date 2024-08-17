<script lang="ts">
    import { colors, primary } from "$lib/palettes";
    import { fade, crossfade, fly } from "svelte/transition";

    import { quintOut } from "svelte/easing";
    import { onMount } from "svelte";
    export let isResponse: boolean = false;
    export let skipTransitionDelay: boolean = false;
    import { Button } from "bits-ui";

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

    function handleCameraLoadSuccess(stream: MediaStream) {
        const video = document.querySelector("video") as HTMLVideoElement;
        video.srcObject = stream;
    }

    function takePicture() {
        console.log("Taking a picture");
        const canvas = document.getElementById(
            "webcam-canvas",
        ) as HTMLCanvasElement;
        const video = document.querySelector("video") as HTMLVideoElement;
        canvas
            .getContext("2d")
            .drawImage(video, 0, 0, canvas.width, canvas.height);
        cb(canvas.toDataURL());
        enabled = false;
    }

    function handleCameraLoadError(error: Error) {
        console.log(
            "navigator.MediaDevices.getUserMedia error: ",
            error.message,
            error.name,
        );
    }

    onMount(() => {
        navigator.mediaDevices
            .getUserMedia({
                video: {
                    facingMode: "environment",
                },
            })
            .then(handleCameraLoadSuccess)
            .catch(handleCameraLoadError);
    });

    // if (isResponse) borderColor = colorString;
    // else borderColor = "#ffffff";
</script>

<div
    class="flex flex-row m-2 justify-end"
    transition:fly={{ delay: skipTransitionDelay ? 0 : 500, duration: 500 }}
>
    {#if enabled}
        <div
            class="flex flex-col justify-center"
            class:mr-8={isResponse}
            class:ml-8={!isResponse}
        >
            <div
                class="rounded-xl ml-2 flex flex-col h-72 w-72"
                style="background-color: {bgColor}; border-color: {$primary}; border-width: 0.15rem; color: {textColor};"
            >
                <video
                    playsinline
                    autoplay
                    class="h-full w-full relative object-cover z-0 rounded-lg"
                >
                    <track kind="captions" />
                </video>
            </div>
            <button class="" on:click={takePicture}
                ><span
                    class="material-symbols-outlined {$primary[400]} text-5xl"
                    style="color: {textColor};"
                >
                    photo_camera
                </span></button
            >
        </div>
    {:else}
        <!-- <div
            class="rounded-xl ml-2 p-4 flex flex-col opacity-50"
            class:mr-8={isResponse}
            class:ml-8={!isResponse}
            style="background-color: {bgColor};  color: {textColor};"
            transition:fly={{ delay: 0, duration: 500 }}
        >
            <div class="flex flex-row py-1">
                <span class="material-symbols-outlined {$primary[400]} mr-2">
                    photo_camera
                </span>
                Took picture
            </div>
        </div> -->
    {/if}
</div>

<style lang="postcss">
</style>
