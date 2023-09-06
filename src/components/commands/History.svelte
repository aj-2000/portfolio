<script lang="ts">
  export let commandName = "history";
  export let commandOutputs = [];
</script>

<section class="px-4 py-1 w-full overflow-scroll">
  <div class="flex gap-2 font-mono">
    <span class="text-green-500 font-bold">~</span>
    <span class="text-red-500">root#</span>
    <span
      class="min-w-0 w-full max-w-full border-none text-white bg-gray-800 outline-none"
      >{commandName}</span
    >
  </div>
  <div class="flex flex-col gap-1">
    {#each commandOutputs as { commandName }}
      <span> {commandName}</span>
    {/each}
  </div>
</section>
