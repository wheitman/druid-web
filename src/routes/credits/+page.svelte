<script>
    import { onMount } from "svelte";
    import Button from "$lib/Button.svelte";
    import back_svg from "$lib/images/back.svg";
    // import Webcam from 'webcam-easy';

    onMount(() => {
        // changeImage();
        // startCamera();
    });

    function goBack() {
        history.back();
    }
</script>

<svelte:head>
    <title>Druid Plant ID</title>
    <meta
        name="description"
        content="Plant identification tool that runs on device"
    />
</svelte:head>

<section class="flex flex-col items-center place-content-between min-h-[95vh]">
    <!-- <img src="src/lib/images/1397613.jpg" id="input-img" alt="Network input" /> -->
    <!-- <img src="src/lib/images/1497667.jpg" id="input-img" alt="Network input" /> -->

    <p class="text-2xl font-bold text-center">Hi, I'm Druid.</p>
    <p class="text-lg">
        I can help you identify 1081 species of plants using on-device AI, and
        then I find details on Wikipedia for you. I'm learning new species all
        the time.
    </p>
    <div id="button-group" class="w-full flex flex-col items-center py-1 px-4">
        <Button on:click={goBack}
            ><span
                ><img
                    src={back_svg}
                    class="h-10 sm:h-6 inline pr-4"
                    alt=""
                />Back home
            </span></Button
        >

        <canvas id="input-canvas" width="224" height="224" class="hidden"
        ></canvas>
    </div>
</section>

<style>
    section {
    }

    #input-img {
    }

    h1 {
        width: 100%;
    }

    .welcome {
        display: block;
        position: relative;
        width: 100%;
        height: 0;
        padding: 0 0 calc(100% * 495 / 2048) 0;
    }

    .welcome img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: block;
    }

    #input-canvas {
        width: 224px;
        height: 224px;
    }

    .floating {
        animation-name: floating;
        animation-duration: 6s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        margin-left: 30px;
        margin-top: 5px;
    }

    @keyframes floating {
        0% {
            transform: translate(0, 0px);
        }
        50% {
            transform: translate(0, 15px);
        }
        100% {
            transform: translate(0, -0px);
        }
    }
</style>
