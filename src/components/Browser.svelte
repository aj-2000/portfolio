<script lang="ts">
  import AppWindow from "./AppWindow.svelte";

  let url = "https://www.proxysite.com/";

  export let isHidden;
  export let onToggle;

  function onToggleMod() {
    if (url === "") url = "https://www.proxysite.com/";
    onToggle();
  }

  function onClose() {
    url = "";
    onToggleMod();
  }
</script>

<AppWindow title="Browser" {isHidden} {onClose} onToggle={onToggleMod}>
  <iframe title="Browser" class="w-full h-full p-1" src={url} />
</AppWindow>
