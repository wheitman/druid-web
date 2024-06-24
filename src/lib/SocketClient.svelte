<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import { io } from "socket.io-client";

    enum ConnectionStatus {
        DISCONNECTED = "Disconnected",
        CONNECTED = "Connected",
    }

    let connection_status: string = ConnectionStatus.DISCONNECTED;

    let socket;
    const dispatch = createEventDispatcher();

    function handleAction(action: string) {
        console.log(`Received action ${action}`);
        dispatch("action", {
            text: action,
        });
    }

    onMount(() => {
        socket = io("ws://localhost:5000");
        socket.on("connect", () => {
            connection_status = ConnectionStatus.CONNECTED;
        });
        socket.on("disconnect", () => {
            connection_status = ConnectionStatus.DISCONNECTED;
        });
        socket.on("action", handleAction);
        socket.emit("message", "What's up!!!");
    });
</script>

<div class="bg-slate-100 mt-4 px-4 rounded-full">
    <span
        id="dot"
        class:text-green-500={connection_status === ConnectionStatus.CONNECTED}
        class:text-amber-500={connection_status ===
            ConnectionStatus.DISCONNECTED}>⬤</span
    >
    {connection_status}
</div>

<style>
</style>
