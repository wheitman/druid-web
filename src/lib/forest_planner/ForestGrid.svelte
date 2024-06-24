<script lang="ts">
    import { onMount } from "svelte";
    import Button from "$lib/Button.svelte";
    import back_svg from "$lib/images/back.svg";
    import camera_svg from "$lib/images/camera.svg";
    import circle_svg from "$lib/images/circle.svg";
    import flip_svg from "$lib/images/flip.svg";
    import magnifying_svg from "$lib/images/magnifying-glass.svg";
    import shuffle_svg from "$lib/images/shuffle.svg";
    import snap_mp3 from "$lib/audio/snap.mp3";
    import { Agent, Action } from "$lib/forest_planner/agent";
    import { Cell, CellType, Location } from "$lib/forest_planner/cell";

    let ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement;
    let grass_color = "#cdebb0";
    let dark_forest_color = "#97bd83";
    // let tree_color = "#add19e";
    let tree_color = dark_forest_color;
    let ego_color = "#f88779";

    export let size_px = 360;
    export let cell_size_px = 40;
    let width = Math.floor(size_px / cell_size_px); // cells
    let height = Math.floor(size_px / cell_size_px); // cells

    let ego = new Agent(new Location(0, 0), plantTree);

    let cells: Cell[][] = [...Array(height)].map((e) => Array(width));

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            cells[i][j] = new Cell(new Location(j, i), CellType.GRASS);
        }
    }

    function drawBoard() {
        let p = 0;
        for (var x = 0; x < size_px; x += 40) {
            ctx.moveTo(0.5 + x + p, p);
            ctx.lineTo(0.5 + x + p, size_px + p);
        }

        for (var x = 0; x < size_px; x += 40) {
            ctx.moveTo(p, 0.5 + x + p);
            ctx.lineTo(size_px + p, 0.5 + x + p);
        }
        ctx.strokeStyle = dark_forest_color;
        ctx.stroke();
    }

    export function handleActionEvent(action_event: CustomEvent) {
        console.log(action_event.detail.text);
        var action: Action =
            Action[action_event.detail.text as keyof typeof Action];
        ego.act(action);
        render();
    }

    function render() {
        cells.forEach((row, i) => {
            row.forEach((cell: Cell, j) => {
                if (i === ego.pos.y && j === ego.pos.x) {
                    ctx.fillStyle = ego_color;
                } else if (cell.type === CellType.TREE) {
                    ctx.fillStyle = tree_color;
                } else {
                    ctx.fillStyle = grass_color;
                }

                ctx.fillRect(
                    cell.location.x * cell_size_px,
                    cell.location.y * cell_size_px,
                    cell_size_px,
                    cell_size_px,
                );
            });
        });

        drawBoard();
    }

    function plantTree() {
        cells[ego.pos.y][ego.pos.x].type = CellType.TREE;
    }

    function handleKeyEvent(event: KeyboardEvent) {
        const key_name = event.key;

        switch (key_name) {
            case "ArrowUp":
                ego.act(Action.MOVE_UP);
                break;
            case "ArrowDown":
                ego.act(Action.MOVE_DOWN);
                break;
            case "ArrowLeft":
                ego.act(Action.MOVE_LEFT);
                break;
            case "ArrowRight":
                ego.act(Action.MOVE_RIGHT);
                break;
            case " ":
                ego.act(Action.PLANT);
                break;
            default:
                console.log(`Unknown key press ${key_name}`);
                break;
        }

        // Ensure that ego stays within grid
        ego.pos.x = Math.max(ego.pos.x, 0);
        ego.pos.x = Math.min(ego.pos.x, width - 1);
        ego.pos.y = Math.max(ego.pos.y, 0);
        ego.pos.y = Math.min(ego.pos.y, height - 1);

        render();
    }

    onMount(() => {
        canvas = <HTMLCanvasElement>document.getElementById("forest-canvas");
        ctx = <CanvasRenderingContext2D>canvas.getContext("2d");

        // Add event handlers
        document.addEventListener("keydown", handleKeyEvent);

        render();
    });
</script>

<canvas id="forest-canvas" width={size_px} height={size_px}></canvas>

<style>
    /* #forest-canvas {
        border: 2px solid black;
    } */
</style>
