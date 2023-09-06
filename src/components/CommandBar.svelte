<script lang="ts">
  export let text = "";
  export let addCommandOutput;
  function onSubmit(e) {
    e.preventDefault();
    const command = text.trim().split(" ");
    addCommandOutput({ commandName: command[0] });
    text = "";
  }
</script>

<div class="px-4 py-1 flex gap-2 font-mono">
  <span class="text-green-500 font-bold">~</span>
  <span class="text-red-500">root#</span>
  <form on:submit={onSubmit}>
    <input
      bind:value={text}
      class="min-w-0 w-full max-w-full border-none text-white bg-gray-800 outline-none"
      type="text"
    />
    <input type="submit" hidden />
  </form>
</div>
