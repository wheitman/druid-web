<script lang="ts">
    import { colors, primary } from "$lib/palettes";
    import { fade, crossfade, fly } from "svelte/transition";
    import Chart from "chart.js/auto";
    import { onMount } from "svelte";

    export let isResponse: boolean = false;

    let bgColor: string;
    let textColor: string;

    primary.subscribe((value) => {
        let colorString = value[500];
        if (isResponse) bgColor = colorString;
        else bgColor = "#ffffff";
        if (isResponse) textColor = "#ffffff";
        else textColor = colorString;
    });

    export let data; // The series to display in the chart
    export let canvasId: string = `canvas_${Math.floor(Math.random() * 1e5)}`;

    function linspace(
        startValue: number,
        stopValue: number,
        cardinality: number,
        round: boolean = true,
    ) {
        var arr = [];
        var step = (stopValue - startValue) / (cardinality - 1);
        for (var i = 0; i < cardinality; i++) {
            let val = startValue + step * i;

            if (round) val = Math.round(val);
            arr.push(val);
        }
        return arr;
    }

    let chart;

    onMount(() => {
        chart = new Chart(document.getElementById(canvasId), {
            type: "line",
            data: {
                labels: linspace(400, 2500, 105),
                datasets: [
                    {
                        label: "Reflectance",
                        data: data,
                        borderWidth: 3,
                        cubicInterpolationMode: "default",
                        pointRadius: 0,
                        pointHoverRadius: 10,
                        pointHitRadius: 10,
                        borderColor: textColor,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMax: 70,
                        title: {
                            text: "Reflectance (%)",
                            display: true,
                        },
                    },
                    x: {
                        title: {
                            text: "Wavelength (nm, soil 'color')",
                            display: true,
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        });
    });

    // if (isResponse) borderColor = colorString;
    // else borderColor = "#ffffff";
</script>

<!-- <div
    class="rounded-xl m-4 bg-clip-border"
    class:mr-8={isResponse}
    class:ml-8={!isResponse}
    style="background-color: {bgColor}; border-color: {$primary}; border-width: 0.15rem; color: {textColor};"
>
    <img src="plants/1357652.jpg" alt="" class="rounded-lg" />
</div> -->

<div
    class="rounded-xl m-4 bg-clip-border h-48 specimen-div"
    class:mr-8={isResponse}
    class:ml-8={!isResponse}
    style="background-color: {bgColor}; border-color: {$primary}; border-width: 0.15rem; color: {textColor};"
    transition:fly={{ delay: 0, duration: 500 }}
>
    <canvas id={canvasId} height="190px"></canvas>
</div>

<style lang="postcss">
</style>
