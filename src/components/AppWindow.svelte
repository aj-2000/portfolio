<script lang="ts">
    import { onMount } from "svelte";
    import Draggable from "./Draggable.svelte";
    import Resizable from "./Resizable.svelte";
    import { twJoin } from "tailwind-merge";

    export let isHidden;
    export let onToggle;
    export let onClose;
    export let title = "untitled";

    const appWindowStyles = {
        container: twJoin(
            "w-full h-full",
        )
    }
</script>

<Draggable>
    <Resizable>
        <div class={`${appWindowStyles.container} ${ isHidden && "hidden"}`} >
            <div class="rounded-lg shadow-xl bg-gray-800 text-white  w-full h-full">
            <div class="flex justify-between border-b border-gray-700 px-4 py-1">
            <div>
                <div on:click={onClose} class="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
                <div on:click={onToggle} class="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-500"></div>
                <div class="inline-block w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span class="flex justify-center text-gray-300 text-sm font-medium">
                {title}
            </span>
            <div class="invisible w-[60.38px]">

            </div>
        </div>
        <div class="h-full w-full">
            <slot></slot>
        </div>

    </Resizable>    
</Draggable>


