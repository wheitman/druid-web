<script lang="ts">
    import { Button } from "bits-ui";
    import "../app.css";
    import { colors, primary } from "$lib/palettes";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    // import gifjs from "$lib/gif";
    import druid_lottie from "$lib/druid-lottie.json";

    export let standalone = false;

    let Lottie;
    onMount(async () => {
        Lottie = (await import("@lottiefiles/lottie-player")).default;

        // let Player = Lottie.LottiePlayer;

        let player = document.getElementById("lottie-player");
        // player.speed = 10;
    });

    // function lottieStalled(event: Event) {
    //     console.log(`Stalled: ${event}`);
    // }

    // function onLottiePlaying(event: Event) {
    //     console.log(`Stalled: ${event}`);
    // }

    // function onLottiePaused(event: Event) {
    //     console.log(`Stalled: ${event}`);
    // }
    // function onLottieCanPlay(event: Event) {
    //     console.log(`Stalled: ${event}`);
    // }
</script>

<div class:standalone>
    <!-- <x-gif src="/druid-web/res/druid.gif"></x-gif>
    <img src="/druid-web/res/druid.gif" alt="The druid wizard." /> -->

    <lottie-player
        id="lottie-player"
        autoplay
        mode="normal"
        src="res/druid-lottie.json"
    >
    </lottie-player>
</div>

<style lang="postcss">
    .standalone {
        height: 60vh;
        padding-left: 2rem;
        padding-right: 2rem;
    }
</style>
