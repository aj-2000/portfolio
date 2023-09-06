<script lang="ts">
    import StatusBar from "../components/StatusBar.svelte";
    import Dock from "../components/Dock.svelte";
    import Terminal from "../components/Terminal.svelte";
    import Browser from "../components/Browser.svelte";
 
    let isTerminalHidden = true;
    let isBrowserHidden = true;

    function onBrowserIconClick () {
        isBrowserHidden = !isBrowserHidden;
    }

    function onTerminalIconClick () {
          isTerminalHidden = !isTerminalHidden;
     }


</script>

<main class="w-full h-screen relative">
    <div class="absolute top-0 left-0 w-full z-50">
        <StatusBar/>
    </div>

    <div class="relative absolute pt-[32px] top-0 left-0 w-full h-full bg-gray-100 z-0 bg-cover bg-[url(https://github.com/aj-2000/portfolio/blob/main/static/images/bg.jpg?raw=true)] bg-center">
        <Terminal isHidden={isTerminalHidden} onToggle={onTerminalIconClick}/>
        <Browser isHidden={isBrowserHidden} onToggle={onBrowserIconClick}/>
    </div>
    <Dock
        {isTerminalHidden} 
        {onTerminalIconClick}

        {isBrowserHidden}
        {onBrowserIconClick}
    />
</main>


