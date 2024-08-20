<script lang="ts">
    import { colors, primary, pageIndex } from "$lib/palettes";
    import { onMount } from "svelte";
    import TextBubble from "$lib/bubbles/TextBubble.svelte";
    import ReportBubble from "$lib/bubbles/ReportBubble.svelte";
    import UrlInputBubble from "$lib/bubbles/UrlInputBubble.svelte";
    import ChartBubble from "$lib/bubbles/ChartBubble.svelte";
    import ChoiceBubble from "$lib/bubbles/ChoiceBubble.svelte";
    import CameraBubble from "$lib/bubbles/CameraBubble.svelte";
    import scans from "./scans.json";
    import minmax from "./minmax.json";
    import { main } from "./predict";

    import { startPlantnetPrediction } from "../predict";

    let bubbles: any = [
        // [ImageBubble, {}],
        // [TextBubble, { isResponse: true }],
        // [TextBubble, {}],
    ];

    let predictedSpecies: string, prob: number;
    let wiki_page_id: number;

    let organic_carbon = -1.0;
    let nitrogen = -1.0;
    let potassium = -1.0;
    let phosphates = -1.0;
    let sand = -1.0;
    let clay = -1.0;
    let silt = -1.0;
    let course_fragments = -1.0;
    let cec = -1.0;

    let organic_carbon_percentile = -1.0;
    let nitrogen_percentile = -1.0;
    let potassium_percentile = -1.0;
    let phosphates_percentile = -1.0;
    let sand_percentile = -1.0;
    let clay_percentile = -1.0;
    let silt_percentile = -1.0;
    let course_fragments_percentile = -1.0;
    let cec_percentile = -1;

    function addTextBubble(
        text: string,
        isResponse: boolean = true,
        immediate = false,
    ) {
        bubbles = [
            ...bubbles,
            [
                TextBubble,
                {
                    isResponse: isResponse,
                    text: text,
                    skipTransitionDelay: immediate,
                },
            ],
        ];
    }

    function addReportBubble(
        text: string,
        isResponse: boolean = true,
        immediate = false,
    ) {
        bubbles = [
            ...bubbles,
            [
                ReportBubble,
                {
                    isResponse: isResponse,
                    text: text,
                    skipTransitionDelay: immediate,
                },
            ],
        ];
    }

    function addSpecimenPromptBubble() {
        loadExampleSpecimen();
        // bubbles = [
        //     ...bubbles,
        //     [
        //         ChoiceBubble,
        //         {
        //             choices: [
        //                 {
        //                     text: "Random example",
        //                     icon: "shuffle",
        //                     cb: loadExampleSpecimen,
        //                 },
        //                 // {
        //                 //     text: "From camera",
        //                 //     icon: "photo_camera",
        //                 //     cb: addCameraBubble,
        //                 // },
        //                 // {
        //                 //     text: "From URL",
        //                 //     icon: "link",
        //                 //     cb: requestImageUrl,
        //                 // },
        //                 // { text: "Use camera", icon: "photo_camera" },
        //             ],
        //         },
        //     ],
        // ];
    }

    function round(x: number, places: number = 2) {
        return Math.round((x + Number.EPSILON) * 10 ** places) / 10 ** places;
    }

    function addScanResultBubble() {
        let choices = [
            // {
            //     text: "How confident are you?",
            //     icon: "percent",
            //     cb: sayConfidence,
            // },

            // {
            //     text: "Describe it",
            //     icon: "info",
            //     cb: describeScan,
            // },
            // {
            //     text: "Open Wikipedia",
            //     icon: "menu_book",
            //     cb: goToWikipedia,
            // },
            {
                text: "New scan",
                icon: "psychiatry",
                cb: addSpecimenPromptBubble,
            },
            // { text: "Use camera", icon: "photo_camera" },
        ];

        bubbles = [
            ...bubbles,
            [
                ChoiceBubble,
                {
                    choices: choices,
                },
            ],
        ];
    }

    function preprocessChartData(scan: number[], downsample_step: number = 10) {
        let processed_data: number[] = [];

        for (let i = 0; i < scan.length; i += downsample_step) {
            processed_data.push(scan[i] * 100);
        }

        return processed_data;
    }

    function getSoilType(pctSand: number, pctClay: number) {
        if (
            86 <= sand &&
            sand <= 100 &&
            0 <= silt &&
            silt <= 14 &&
            0 <= clay &&
            clay <= 10
        )
            return "Sand";
        else if (
            70 <= sand &&
            sand <= 86 &&
            0 <= silt &&
            silt <= 30 &&
            0 <= clay &&
            clay <= 15
        )
            return "Loamy sand";
        else if (
            44 <= sand &&
            sand <= 85 &&
            0 <= silt &&
            silt <= 50 &&
            0 <= clay &&
            clay <= 20
        )
            return "Sandy loam";
        else if (
            23 <= sand &&
            sand <= 52 &&
            28 <= silt &&
            silt <= 50 &&
            7 <= clay &&
            clay <= 27
        )
            return "Loam";
        else if (
            20 <= sand &&
            sand <= 50 &&
            50 <= silt &&
            silt <= 88 &&
            0 <= clay &&
            clay <= 27
        )
            return "Silty loam";
        else if (
            0 <= sand &&
            sand <= 20 &&
            80 <= silt &&
            silt <= 100 &&
            0 <= clay &&
            clay <= 15
        )
            return "Silt";
        else if (
            20 <= sand &&
            sand <= 45 &&
            15 <= silt &&
            silt <= 40 &&
            27 <= clay &&
            clay <= 40
        )
            return "Clay loam";
        else if (
            45 <= sand &&
            sand <= 80 &&
            0 <= silt &&
            silt <= 28 &&
            20 <= clay &&
            clay <= 35
        )
            return "Sandy clay loam";
        else if (
            0 <= sand &&
            sand <= 20 &&
            40 <= silt &&
            silt <= 72 &&
            28 <= clay &&
            clay <= 40
        )
            return "Sandy clay loam";
        else if (
            45 <= sand &&
            sand <= 65 &&
            0 <= silt &&
            silt <= 20 &&
            35 <= clay &&
            clay <= 55
        )
            return "Sandy clay";
        else if (
            0 <= sand &&
            sand <= 20 &&
            40 <= silt &&
            silt <= 60 &&
            40 <= clay &&
            clay <= 60
        )
            return "Silty clay";
        else if (
            0 <= sand &&
            sand <= 45 &&
            0 <= silt &&
            silt <= 40 &&
            40 <= clay &&
            clay <= 100
        )
            return "Clay";
        else return "Unknown";
    }

    function describeScan() {
        let remarks: string[] = [];

        // Org. carbon remarks
        if (organic_carbon_percentile > 90) {
            remarks.push(
                "Your soil is extremely high in organic carbon. Perhaps you've struck oil?",
            );
        } else if (organic_carbon_percentile < 20) {
            remarks.push(
                "Your soil is low in organic carbon. Consider ammending with compost.",
            );
        }

        // NPK remarks
        if (
            nitrogen_percentile < 30 &&
            potassium_percentile < 30 &&
            phosphates < 30
        ) {
            remarks.push(
                "Your soil appears to be low in both nitrogen, potassium, and phosphates. Consider adding a 20-20-20 fertilizer.",
            );
        } else if (nitrogen_percentile < 30) {
            remarks.push(
                "Your soil appears to be low in nitrogen. Consider adding urea, ammonium nitrates, or other high-N fertilizer.",
            );
        } else if (phosphates_percentile < 30) {
            remarks.push(
                "Your soil appears to be low in phosphates. Consider appropriate fertilizer.",
            );
        } else if (potassium_percentile < 30) {
            remarks.push(
                "Your soil appears to be low in potassium. Natural fertlizers like compost and wood ash can help.",
            );
        }

        remarks.forEach((remark) => {
            addTextBubble(remark, true, true);
        });
        addTextBubble("My full report is below.", true, true);

        addReportBubble(`---- Chemical Properties ----
Org. carbon: ${round(organic_carbon)}% (${organic_carbon_percentile}th pctl)
Nitrogen:    ${round(nitrogen)}% (${nitrogen_percentile}th pctl)
Potassium:   ${round(potassium)}% (${potassium_percentile}th pctl)
Phosphates:  ${round(phosphates)}% (${phosphates_percentile}th pctl)
---- Physical Properties ----
Clay:             ${round(clay, 0)}%
Silt:             ${round(silt, 0)}%
Sand:             ${round(sand, 0)}%
Course fragments: ${round(course_fragments, 0)}%
Soil type:        ${getSoilType(sand, clay)}
        `);
    }

    async function makePrediction(scan: number[]) {
        // prediction_in_progress = true;

        // This is the MOST IMPORTANT LINE:
        // It actually runs the neural network
        let [results, result_percentiles] = await main(scan, minmax);

        organic_carbon = results[0];
        nitrogen = results[1];
        potassium = results[2];
        phosphates = results[3];
        sand = results[4];
        clay = results[5];
        silt = results[6];
        course_fragments = results[7];
        cec = results[8];

        // console
        organic_carbon_percentile = result_percentiles[0];
        nitrogen_percentile = result_percentiles[1];
        potassium_percentile = result_percentiles[2];
        phosphates_percentile = result_percentiles[3];
        sand_percentile = result_percentiles[4];
        clay_percentile = result_percentiles[5];
        silt_percentile = result_percentiles[6];
        course_fragments_percentile = result_percentiles[7];
        cec_percentile = result_percentiles[8];

        // addTextBubble(
        //     `Carbon: ${organic_carbon} (${organic_carbon_percentile})`,
        // );
        describeScan();
        addScanResultBubble();
    }

    function loadExampleSpecimen() {
        console.log("Loading scan");

        const selected_scan = scans[Math.floor(Math.random() * scans.length)];

        bubbles = [
            ...bubbles,
            [ChartBubble, { data: preprocessChartData(selected_scan) }],
        ];

        makePrediction(selected_scan);
        // bubbles = [
        //     ...bubbles,
        //     [
        //         TextBubble,
        //         {
        //             isResponse: true,
        //             text: "Ah, lovely specimem. Shall I identify it for you?",
        //         },
        //     ],
        // ];
        // bubbles = [
        //     ...bubbles,
        //     [
        //         ChoiceBubble,
        //         {
        //             skipTransitionDelay: false,
        //             choices: [
        //                 {
        //                     text: "Identify",
        //                     icon: "search",
        //                     cb: startPlantID,
        //                 },
        //                 {
        //                     text: "Different example",
        //                     icon: "refresh",
        //                     cb: addSpecimenPromptBubble,
        //                 },
        //                 // { text: "Use camera", icon: "photo_camera" },
        //             ],
        //         },
        //     ],
        // ];
    }

    function loadSpecimenFromUrl(url: string) {
        console.log(`loading image from ${url}`);

        bubbles = [...bubbles, [ImageBubble, { imageUrl: url }]];

        startPlantID();
        // bubbles = [
        //     ...bubbles,
        //     [
        //         TextBubble,
        //         {
        //             isResponse: true,
        //             text: "Ah, lovely specimem. Shall I identify it for you?",
        //         },
        //     ],
        // ];
        // bubbles = [
        //     ...bubbles,
        //     [
        //         ChoiceBubble,
        //         {
        //             skipTransitionDelay: false,
        //             choices: [
        //                 {
        //                     text: "Identify",
        //                     icon: "search",
        //                     cb: startPlantID,
        //                 },
        //                 {
        //                     text: "Different example",
        //                     icon: "shuffle",
        //                     cb: addSpecimenPromptBubble,
        //                 },
        //                 // { text: "Use camera", icon: "photo_camera" },
        //             ],
        //         },
        //     ],
        // ];
    }

    onMount(() => {
        primary.set(colors.clay);
        pageIndex.set(2);

        addTextBubble(
            "I can instantly analyze your soil using reflected light and convolutional magic.",
            true,
            true,
        );
        addScanResultBubble();
        // addSpecimenPromptBubble();
    });
</script>

<svelte:head>
    <title>Plant Analysis - Druid</title>
    <meta
        name="description"
        content="Plant identification tool that runs on device"
    />
</svelte:head>

<div class="overflow-auto max-h-[90vh]" id="chat-div">
    {#each bubbles as [bubble, props]}
        <svelte:component this={bubble} {...props} />
    {/each}
    <div id="anchor"></div>
</div>

<canvas id="input-canvas" width="224" height="224" class="hidden"></canvas>
<canvas id="webcam-canvas" width="224" height="224" class="hidden"></canvas>
<img
    id="input-img"
    width="224"
    height="224"
    alt="For neural network."
    class="hidden"
/>

<style>
</style>
