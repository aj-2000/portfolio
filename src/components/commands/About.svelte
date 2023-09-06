<script lang="ts">
  export let commandName = "welcome";
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
  <div
    class="flex flex-col gap-2 px-4 py-2 m-2 border border-green-500 rounded-md"
  >
    <p>
      Hi, my name is <span class="font-bold text-red-500">Ajay Sharma</span>!
    </p>
    <p>
      I'm <span class="font-bold text-emerald-500">a full-stack developer</span>
      based in Delhi, India.
    </p>
    <p>
      I am passionate about writing codes and <br />
      developing web applications to solve real-life challenges.
    </p>
  </div>
</section>
