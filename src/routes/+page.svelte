<script lang="ts">
  import StatusBar from "../components/StatusBar.svelte";
  import Dock from "../components/Dock.svelte";
  import Terminal from "../components/Terminal.svelte";
  import Draggable from "../components/Draggable.svelte";

  let isTerminalHidden = true;

  function onTerminalIconClick () {
      isTerminalHidden = !isTerminalHidden;
      console.log("called")
  }


</script>

<main class="w-full h-screen relative">
    <div class="absolute top-0 left-0 w-full z-50">
        <StatusBar/>
    </div>

    <div class="relative absolute pt-[32px] top-0 left-0 w-full h-full bg-gray-100 z-0 bg-cover bg-[url(https://github.com/aj-2000/portfolio/blob/main/static/images/bg.jpg?raw=true)] bg-center">
        <Terminal {onTerminalIconClick} isHidden={isTerminalHidden}/> 
    </div>
    <Dock {isTerminalHidden}  {onTerminalIconClick} />
</main>


