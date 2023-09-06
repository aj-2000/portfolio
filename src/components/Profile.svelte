<script lang="ts">
  import AppWindow from "./AppWindow.svelte";

  export let isHidden;
  export let onToggle;

  function onClose() {
    onToggle();
  }
</script>

<AppWindow title="Profile" {isHidden} {onClose} {onToggle}>
  <div
    class="flex justify-center items-center bg-black text-gray-600 h-full w-full"
  >
    <div class="text-gray-200">
      <p>Hi! I am Ajay.</p>
      <p>I am Develoer!</p>
    </div>
  </div>
</AppWindow>
