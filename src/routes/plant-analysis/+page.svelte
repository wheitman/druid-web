<script lang="ts">
    import { colors, primary } from "$lib/palettes";
    import { onMount } from "svelte";
    import TextBubble from "$lib/bubbles/TextBubble.svelte";
    import TextInputBubble from "$lib/bubbles/TextInputBubble.svelte";
    import ImageBubble from "$lib/bubbles/ImageBubble.svelte";
    import ChoiceBubble from "$lib/bubbles/ChoiceBubble.svelte";

    import { startPlantnetPrediction } from "../predict";

    let bubbles: any = [
        // [ImageBubble, {}],
        // [TextBubble, { isResponse: true }],
        // [TextBubble, {}],
    ];

    let examplePlants = [
        "plants/1355868.jpg",
        "plants/1355990.jpg",
        "plants/1357652.jpg",
        "plants/1358105.jpg",
        "plants/1359483.jpg",
        "plants/1363021.jpg",
        "plants/1364165.jpg",
        "plants/1385937.jpg",
        "plants/1391963.jpg",
        "plants/1397613.jpg",
        "plants/1497667.jpg",
    ];

    let lastConfidence: number = -1;

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

    function addSpecimenPromptBubble() {
        bubbles = [
            ...bubbles,
            [
                ChoiceBubble,
                {
                    choices: [
                        {
                            text: "Random example",
                            icon: "shuffle",
                            cb: loadExampleSpecimen,
                        },
                        {
                            text: "From URL",
                            icon: "link",
                            cb: getSpecimenFromUrl,
                        },
                        // { text: "Use camera", icon: "photo_camera" },
                    ],
                },
            ],
        ];
    }

    async function startPlantID() {
        console.log("Identifying plant!");
        addTextBubble("Thinking...", true, true);
        let predictedSpecies, prob;
        [predictedSpecies, prob] = await startPlantnetPrediction();

        prob *= 100;
        lastConfidence = prob;

        let confidenceRemark;

        if (prob > 99) {
            confidenceRemark = ", no doubt! ";
        } else if (prob > 90) {
            confidenceRemark = ", I'm almost certain. ";
        } else if (prob > 50) {
            confidenceRemark = ", I'm mostly sure. ";
        } else if (prob > 25) {
            confidenceRemark = ", I think. Though I have my doubts. ";
        } else {
            confidenceRemark =
                ", but that's just a wild guess. Frankly, I have no idea what this is. ";
        }

        addTextBubble(
            `Ah, ${predictedSpecies}, ${confidenceRemark} `,
            true,
            true,
        );

        addPlantIdResultBubble();
        console.log(predictedSpecies);
        console.log(prob);
    }

    function sayConfidence() {
        let confidenceRemark;
        if (lastConfidence > 99) {
            confidenceRemark = "This is one of my favorites.";
        } else if (lastConfidence > 85) {
            confidenceRemark = "So, pretty confident.";
        } else if (lastConfidence > 50) {
            confidenceRemark = "You might want to check this.";
        } else if (lastConfidence > 30) {
            confidenceRemark =
                "It's likely I haven't seen your plant yet, so I've given my best guess.";
        } else {
            confidenceRemark = "Not confident at all!";
        }
        addTextBubble(`${Math.floor(lastConfidence)}%. ${confidenceRemark}`);
        addTextBubble(`How about another go? `, true, false);

        addPlantIdResultBubble();
    }

    function addPlantIdResultBubble() {
        bubbles = [
            ...bubbles,
            [
                ChoiceBubble,
                {
                    choices: [
                        {
                            text: "How confident exactly?",
                            icon: "percent",
                            cb: sayConfidence,
                        },
                        {
                            text: "New plant",
                            icon: "psychiatry",
                            cb: addSpecimenPromptBubble,
                        },
                        // { text: "Use camera", icon: "photo_camera" },
                    ],
                },
            ],
        ];
    }

    function loadExampleSpecimen() {
        console.log("loading image");

        const randomChoice =
            examplePlants[Math.floor(Math.random() * examplePlants.length)];

        bubbles = [...bubbles, [ImageBubble, { imageUrl: randomChoice }]];
        bubbles = [
            ...bubbles,
            [
                TextBubble,
                {
                    isResponse: true,
                    text: "Ah, lovely specimem. Shall I identify it for you?",
                },
            ],
        ];
        bubbles = [
            ...bubbles,
            [
                ChoiceBubble,
                {
                    skipTransitionDelay: false,
                    choices: [
                        {
                            text: "Identify",
                            icon: "search",
                            cb: startPlantID,
                        },
                        {
                            text: "Different example",
                            icon: "shuffle",
                            cb: loadExampleSpecimen,
                        },
                        // { text: "Use camera", icon: "photo_camera" },
                    ],
                },
            ],
        ];
    }
    function getSpecimenFromUrl() {
        console.log("loading image");

        const randomChoice =
            examplePlants[Math.floor(Math.random() * examplePlants.length)];

        bubbles = [
            ...bubbles,
            [TextInputBubble, { skipTransitionDelay: true }],
        ];
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
        //                     cb: loadExampleSpecimen,
        //                 },
        //                 // { text: "Use camera", icon: "photo_camera" },
        //             ],
        //         },
        //     ],
        // ];
    }

    onMount(() => {
        primary.set(colors.cambridge);

        addTextBubble(
            "I know 1,081 plant species. Let's see if I know yours.",
            true,
            true,
        );
        addSpecimenPromptBubble();
    });
</script>

<svelte:head>
    <title>Plant Analysis - Druid</title>
    <meta
        name="description"
        content="Plant identification tool that runs on device"
    />
</svelte:head>

<div class="overflow-auto max-h-[90vh]">
    {#each bubbles as [bubble, props]}
        <svelte:component this={bubble} {...props} />
    {/each}
</div>

<canvas id="input-canvas" width="224" height="224" class="hidden"></canvas>
<img
    id="input-img"
    width="224"
    height="224"
    alt="For neural network."
    class="hidden"
/>

<style>
</style>
