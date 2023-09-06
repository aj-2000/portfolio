<script lang="ts">
    import { onMount } from "svelte";
    import Draggable from "./Draggable.svelte";
    export let isHidden;
    export let onTerminalIconClick;

    let text = "";

    import { twJoin } from "tailwind-merge";
    const introStyles = {
        container: twJoin(
            "absolute top-[20%] left-[30%] z-10",
        )
    }

    function onTerminalClose () {
        text = "";
        onTerminalIconClick();
    }

    $: console.log(isHidden, introStyles)
</script>

<Draggable>
<div class={`${introStyles.container} ${isHidden && "hidden"}`} >
    <div class="rounded-lg shadow-xl bg-gray-800 text-white  w-full md:w-[450px] h-[200px]">
        <div class="flex justify-between border-b border-gray-700 px-4 py-1">
            <div>
                <div on:click={onTerminalClose} class="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
                <div on:click={onTerminalIconClick} class="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-500"></div>
                <div class="inline-block w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span class="flex justify-center text-gray-300 text-sm font-medium">
                terminal
            </span>
            <div class="invisible w-[60.38px]">
 
            </div>
        </div>
        <div class="px-2 py-1">
            <p class="flex gap-2">
                <span class="font-bold font-mono">#</span> <input bind:value={text} class="min-w-0 w-full max-w-full border-none text-white bg-gray-800 outline-none" type="text"/>
            </p>
        </div>
    </div>
</div>
</Draggable>
