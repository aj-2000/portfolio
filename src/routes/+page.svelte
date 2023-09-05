<script lang="ts">
  import StatusBar from "../components/StatusBar.svelte";
  import Dock from "../components/Dock.svelte"; 
</script>

<main class="w-full h-screen relative">
    <div class="absolute top-0 left-0 w-full z-50">
        <StatusBar/>
    </div>

    <div class="absolute pt-[32px] top-0 left-0 w-full h-full bg-gray-100 z-0 bg-cover bg-[url(images/bg.jpg)] bg-center">
        

    </div>

    <Dock/>


</main>


