<script lang="ts">
  import { twJoin } from "tailwind-merge";
  import Icon from "@iconify/svelte";
  import { URLS } from "$lib";
  const dockStyles = {
    container: twJoin(
      "absolute bottom-2 left-[50%] -translate-x-[50%] z-50",
      "border-[0.5px] border-gray-600",
      "rounded-3xl",
      "bg-grey-200 bg-opacity-30 backdrop-blur-2xl",
      "h-20 max-w-[95%] px-3 pt-2",
      "flex items-center justify-start gap-4",
      "overflow-scroll"
    ),
    item: twJoin("drop-shadow-xl", "flex flex-col justify-center items-center"),
  };

  export let isTerminalHidden;
  export let onTerminalIconClick;

  export let isBrowserHidden;
  export let onBrowserIconClick;

  export let isProfileHidden;
  export let onProfileIconClick;

  export let isMeetAppHidden;
  export let onMeetAppIconClick;
</script>

<div class={dockStyles.container}>
  <div class={dockStyles.item}>
    <img
      on:click={onProfileIconClick}
      class="rounded-full"
      src={URLS.profileImage}
      width="50"
      height="50"
    />
    <Icon
      class={`text-gray-300 ${isProfileHidden && "invisible"}`}
      icon="radix-icons:dot-filled"
      width="10"
      height="10"
    />
  </div>

  <div class={dockStyles.item}>
    <img
      on:click={onMeetAppIconClick}
      src={URLS.meetAppIcon}
      width="50"
      height="50"
    />
    <Icon
      class={`text-gray-300 ${isMeetAppHidden && "invisible"}`}
      icon="radix-icons:dot-filled"
      width="10"
      height="10"
    />
  </div>

  <div on:click={onTerminalIconClick} class={dockStyles.item}>
    <Icon icon="logos:terminal" width="50" height="50" />
    <Icon
      class={`text-gray-300 ${isTerminalHidden && "invisible"}`}
      icon="radix-icons:dot-filled"
      width="10"
      height="10"
    />
  </div>

  <div on:click={onBrowserIconClick} class={dockStyles.item}>
    <Icon icon="logos:chrome" width="50" height="50" />
    <Icon
      class={`text-gray-300 ${isBrowserHidden && "invisible"}`}
      icon="radix-icons:dot-filled"
      width="10"
      height="10"
    />
  </div>
</div>
