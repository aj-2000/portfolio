<script lang="ts">
  import StatusBar from "../components/StatusBar.svelte";
  import Dock from "../components/Dock.svelte";
  import Terminal from "../components/Terminal.svelte";
  import Browser from "../components/Browser.svelte";
  import Profile from "../components/Profile.svelte";
  import MeetApp from "../components/MeetApp.svelte";

  let isTerminalHidden = true;
  let isBrowserHidden = true;
  let isProfileHidden = true;
  let isMeetAppHidden = true;

  function onProfileIconClick() {
    isProfileHidden = !isProfileHidden;
  }

  function onBrowserIconClick() {
    isBrowserHidden = !isBrowserHidden;
  }

  function onMeetAppIconClick() {
    console.log("onMeetAppIconClick");
    isMeetAppHidden = !isMeetAppHidden;
  }

  function onTerminalIconClick() {
    isTerminalHidden = !isTerminalHidden;
  }
</script>

<main class="w-full h-screen relative overflow-clip">
  <div class="absolute top-0 left-0 w-full z-50">
    <StatusBar />
  </div>

  <div
    class="absolute pt-[32px] top-0 left-0 w-full h-full bg-gray-100 z-0 bg-cover bg-[url(https://github.com/aj-2000/portfolio/blob/main/static/images/bg.jpg?raw=true)] bg-center"
  >
    <Terminal isHidden={isTerminalHidden} onToggle={onTerminalIconClick} />
    <Browser isHidden={isBrowserHidden} onToggle={onBrowserIconClick} />
    <Profile isHidden={isProfileHidden} onToggle={onProfileIconClick} />
    <MeetApp isHidden={isMeetAppHidden} onToggle={onMeetAppIconClick} />
  </div>
  <Dock
    {isTerminalHidden}
    {onTerminalIconClick}
    {isBrowserHidden}
    {onBrowserIconClick}
    {isProfileHidden}
    {onProfileIconClick}
    {isMeetAppHidden}
    {onMeetAppIconClick}
  />
</main>
