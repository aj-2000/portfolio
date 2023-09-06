<script lang="ts">
  import { afterUpdate, tick } from "svelte";
  import AppWindow from "./AppWindow.svelte";
  import CommandBar from "./CommandBar.svelte";
  import NotFound from "./commands/NotFound.svelte";
  import Welcome from "./commands/Welcome.svelte";

  interface ICommandOutput {
    commandName: string;
  }

  let element;
  let commandOutputselement;
  let commandOutputs: ICommandOutput[] = [{ commandName: "welcome" }];
  let text = "welcome";

  // Either afterUpdate()
  afterUpdate(() => {
    console.log("afterUpdate");
    if (commandOutputs) scrollToBottom(element);
  });

  $: if (commandOutputs && element) {
    console.log("tick");
    scrollToBottom(element);
  }

  const scrollToBottom = async (node) => {
    node.scroll({ top: node.scrollHeight, behavior: "smooth" });
  };

  export let isHidden;
  export let onToggle;

  function onClose() {
    text = "";
    onToggle();
  }

  function addCommandOutput(commandOutput) {
    if (commandOutput.commandName === "clear") {
      commandOutputs = [];
    } else {
      commandOutputs = [...commandOutputs, commandOutput];
    }
  }
</script>

<AppWindow title="terminal" {isHidden} {onToggle} {onClose}>
  <div bind:this={element} class="w-full h-full overflow-scroll">
    {#each commandOutputs as { commandName }}
      {#if commandName === "welcome"}
        <Welcome />
      {:else}
        <NotFound {commandName} />
      {/if}
    {/each}
    <CommandBar {addCommandOutput} />
  </div>
</AppWindow>
