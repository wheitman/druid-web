<script>
    export let type = "secondary";
</script>

<button
    class="lined thick w-full border-green-400 text-4xl sm:text-xl m-0 py-1"
    class:primary={type == "primary"}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:focus
>
    <slot />
</button>

<style>
    button {
        background: transparent;
        /* padding: 0.5rem 0.5rem; */
        margin: 0 0.5rem;
        /* font-size: 1rem; */

        border-top-left-radius: 255px 15px;
        border-top-right-radius: 15px 225px;
        border-bottom-right-radius: 225px 15px;
        border-bottom-left-radius: 15px 255px;
        margin: 0.5rem;
    }

    button:hover {
        box-shadow: 2px 8px 4px -6px hsla(0, 0%, 0%, 0.3);
    }
    button.lined.thick {
        border: solid 3px #41403e;
    }
    .primary {
        border: solid 6px #6e9586 !important;
        background-color: #dde2ae;
    }
    button.dotted.thick {
        border: dotted 3px #41403e;
    }
    button.dashed.thick {
        border: dashed 3px #41403e;
    }
    button.lined.thin {
        border: solid 2px #41403e;
    }
    button.dotted.thin {
        border: dotted 2px #41403e;
    }
    button.dashed.thin {
        border: dashed 2px #41403e;
    }
</style>
