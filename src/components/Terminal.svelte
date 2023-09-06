<script lang="ts">
    import AppWindow from "./AppWindow.svelte";
    
    let text;

    export let isHidden;
    export let onToggle;

    function onClose () {
        text = "";
        onToggle();
    }
</script>


<AppWindow title="terminal" {isHidden} {onToggle} {onClose}>
    <p class="p-1 flex gap-2">
        <span class="font-bold font-mono">$</span> <input bind:value={text} class="min-w-0 w-full max-w-full border-none text-white bg-gray-800 outline-none" type="text"/>
    </p>
</AppWindow>


