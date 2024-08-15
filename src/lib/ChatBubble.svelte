<script lang="ts">
    import { colors, primary } from "$lib/palettes";
    export let isResponse: boolean = false;

    let colorString = $primary[500];

    let bgColor: string;
    let textColor: string;

    if (isResponse) bgColor = colorString;
    else bgColor = "#ffffff";
    if (isResponse) textColor = "#ffffff";
    else textColor = colorString;

    // if (isResponse) borderColor = colorString;
    // else borderColor = "#ffffff";
</script>

<div
    class="rounded-xl m-4 p-4"
    class:mr-8={isResponse}
    class:ml-8={!isResponse}
    style="background-color: {bgColor}; border-color: {colorString}; border-width: 2px; color: {textColor};"
>
    Ah, lovely specimen. Shall I identify it for you?
</div>

<style lang="postcss">
</style>
