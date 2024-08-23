<script lang="ts">
    import {
        colors,
        primary,
        pageIndex,
        globalLottieIndex,
    } from "$lib/palettes";
    import { onMount } from "svelte";
    import TextBubble from "$lib/bubbles/TextBubble.svelte";
    import Disclosure from "$lib/bubbles/Disclosure.svelte";
    import UrlInputBubble from "$lib/bubbles/UrlInputBubble.svelte";
    import ImageBubble from "$lib/bubbles/ImageBubble.svelte";
    import ChoiceBubble from "$lib/bubbles/ChoiceBubble.svelte";
    import CameraBubble from "$lib/bubbles/CameraBubble.svelte";

    import { startPlantnetPrediction } from "../predict";

    let bubbles: any[] = [
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

    let predictedSpecies: string, prob: number;
    let wiki_page_id: number;

    function addTextBubble(
        text: string,
        isResponse: boolean = true,
        immediate = false,
    ) {
        $globalLottieIndex++;

        bubbles = [
            ...bubbles,
            [
                TextBubble,
                {
                    isResponse: isResponse,
                    text: text,
                    skipTransitionDelay: immediate,
                    lottieIndex: $globalLottieIndex,
                },
            ],
        ];
    }

    function addCameraBubble() {
        bubbles = [
            ...bubbles,
            [
                CameraBubble,
                {
                    skipTransitionDelay: false,
                    icon: "send",
                    cb: loadSpecimenFromUrl,
                },
            ],
        ];
        scrollToBottom();
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
                            text: "From camera",
                            icon: "photo_camera",
                            cb: addCameraBubble,
                        },
                        // {
                        //     text: "From URL",
                        //     icon: "link",
                        //     cb: requestImageUrl,
                        // },
                        // { text: "Use camera", icon: "photo_camera" },
                    ],
                },
            ],
        ];
        scrollToBottom();
    }

    function removeLastBubble() {
        bubbles.pop();
    }

    async function startPlantID() {
        console.log("Identifying plant!");
        addTextBubble("Thinking...", true, true);

        [predictedSpecies, prob] = await startPlantnetPrediction();
        removeLastBubble();

        prob *= 100;

        let confidenceRemark;
        let confidencePremark = "This is ";

        if (prob < 50) {
            confidencePremark =
                "I don't believe I've seen this species before. My best guess is ";
        }

        if (prob > 99) {
            confidenceRemark = ", no doubt! ";
        } else if (prob > 80) {
            confidenceRemark = ", I'm nearly certain. ";
        } else if (prob > 50) {
            confidenceRemark = ", I believe. ";
        } else if (prob > 25) {
            confidenceRemark = ". ";
        } else {
            confidenceRemark =
                ", but that's just a wild guess. Frankly, I have no idea what this is. ";
        }

        let response: string = `${confidencePremark}${predictedSpecies}, ${confidenceRemark} `;

        if (prob <= 25) {
            response =
                "Oh dear. I'm not sure what this is. Let's try another plant.";
        }

        addTextBubble(response, true, true);

        addPlantIdResultBubble();
        console.log(predictedSpecies);
        console.log(prob);
    }

    function sayConfidence() {
        let confidenceRemark;
        if (prob > 99) {
            confidenceRemark = "This is one of my favorites.";
        } else if (prob > 85) {
            confidenceRemark = "Quite confident indeed, my child.";
        } else if (prob > 50) {
            confidenceRemark = "You might want to check this.";
        } else if (prob > 30) {
            confidenceRemark =
                "It's likely I haven't seen your plant yet, so I've given my best guess.";
        } else {
            confidenceRemark = "Not confident at all!";
        }
        addTextBubble(`${Math.floor(prob)}%. ${confidenceRemark}`);
        // addTextBubble(`How about another go? `, true, false);

        addPlantIdResultBubble();
    }

    async function goToWikipedia() {
        let [extract, wiki_page_id] = await searchWikipedia();

        console.log("The page id is ", wiki_page_id);
        window
            .open(
                `http://en.wikipedia.org/wiki?curid=${wiki_page_id}`,
                "_blank",
            )
            .focus();

        addPlantIdResultBubble();
    }

    async function describeFromWikipedia() {
        let [extract, wiki_page_id] = await searchWikipedia();
        addTextBubble(extract, true, true);
        addPlantIdResultBubble();
    }

    function scrollToBottom() {
        let nestedElement = document.getElementById("chat-div");
        nestedElement.scrollTo(0, nestedElement.scrollHeight);
        console.log("Done scrolling, first.");

        setTimeout(() => {
            nestedElement.scrollTo({
                top: nestedElement.scrollHeight,
                behavior: "smooth",
            });
            console.log("Done scrolling.");
        }, 200);
    }

    async function searchWikipedia() {
        let searchQuery = predictedSpecies;
        const search_endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
        // const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
        let response = await fetch(search_endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        let json = await response.json();

        console.log(json.query);
        wiki_page_id = json.query.search[0].pageid;

        const explain_text_endpoint = `https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro=1&explaintext=1&pageids=${wiki_page_id}`;
        response = await fetch(explain_text_endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        json = await response.json();

        console.log(json);

        console.log(json.query.pages.length);

        return [json.query.pages[wiki_page_id].extract, wiki_page_id];
        // if (json.query.pages.length > 0) {
        // } else {
        // 	return "No description available.";
        // }
    }

    function addPlantIdResultBubble() {
        let choices;

        if (prob > 25) {
            choices = [
                {
                    text: "How confident are you?",
                    icon: "percent",
                    cb: sayConfidence,
                },

                {
                    text: "Describe it",
                    icon: "info",
                    cb: describeFromWikipedia,
                },
                {
                    text: "Open Wikipedia",
                    icon: "menu_book",
                    cb: goToWikipedia,
                },
                {
                    text: "New plant",
                    icon: "psychiatry",
                    cb: addSpecimenPromptBubble,
                },
                // { text: "Use camera", icon: "photo_camera" },
            ];
        } else {
            choices = [
                {
                    text: "New plant",
                    icon: "psychiatry",
                    cb: addSpecimenPromptBubble,
                },
                // { text: "Use camera", icon: "photo_camera" },
            ];
        }

        bubbles = [
            ...bubbles,
            [
                ChoiceBubble,
                {
                    choices: choices,
                },
            ],
        ];
        scrollToBottom();
    }

    function loadExampleSpecimen() {
        console.log("loading image");

        const randomChoice =
            examplePlants[Math.floor(Math.random() * examplePlants.length)];

        bubbles = [...bubbles, [ImageBubble, { imageUrl: randomChoice }]];

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

    function requestImageUrl() {
        console.log("loading image");

        addTextBubble(
            "Careful, my child: I likely haven't studied plants from the Great Unknown-- ahem, the Internet. I will warn you if I see something new to me.",
            true,
            true,
        );

        bubbles = [
            ...bubbles,
            [
                UrlInputBubble,
                {
                    skipTransitionDelay: false,
                    icon: "send",
                    cb: loadSpecimenFromUrl,
                },
            ],
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

    function addDisclosure(text: string, symbol: string, immediate = false) {
        bubbles = [
            ...bubbles,
            [
                Disclosure,
                {
                    text: text,
                    symbol: symbol,
                    skipTransitionDelay: immediate,
                },
            ],
        ];
    }

    onMount(() => {
        primary.set(colors.cambridge);
        pageIndex.set(1);
        $globalLottieIndex = 0;

        addTextBubble(
            "I know 1,081 plant species. Let's see if I know yours.",
            true,
            true,
        );
        addDisclosure("Conversation never leaves your device.", "lock", false);

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
