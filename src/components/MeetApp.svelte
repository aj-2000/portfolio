<script lang="ts">
  import AppWindow from "./AppWindow.svelte";

  let url = "https://sixteen.ajaysharma.dev/";

  export let isHidden;
  export let onToggle;

  function onToggleMod() {
    if (url === "") url = "https://sixteen.ajaysharma.dev/";
    onToggle();
    console.log("onToggle");
  }

  function onClose() {
    url = "";
    onToggleMod();
  }
</script>

<AppWindow title="Sixteen Meet" {isHidden} {onClose} onToggle={onToggleMod}>
  <iframe title="Sixteen Meet" class="w-full h-full" src={url} />
</AppWindow>
