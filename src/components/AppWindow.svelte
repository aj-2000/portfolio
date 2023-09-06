<script>
  import { twJoin } from "tailwind-merge";

  export let isHidden;
  export let onToggle;
  export let onClose;
  export let title = "untitled";

  const appWindowStyles = {
    container: twJoin("w-[960px] h-[540px]"),
  };

  let isDragging = false;
  let isResizing = false;

  function draggable(node) {
    let offsetX, offsetY;

    function handleMouseDown(event) {
      event.stopPropagation();
      offsetX = event.clientX - node.getBoundingClientRect().left;
      offsetY = event.clientY - node.getBoundingClientRect().top;
      isDragging = true;

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    function handleMouseMove(event) {
      if (!isDragging || isResizing) return;
      node.style.left = `${event.clientX - offsetX}px`;
      node.style.top = `${event.clientY - offsetY}px`;
    }

    function handleMouseUp() {
      isDragging = false;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    node.addEventListener("mousedown", handleMouseDown);

    return {
      destroy() {
        node.removeEventListener("mousedown", handleMouseDown);
      },
    };
  }

  function resizable(node) {
    let startX, startY, startWidth, startHeight;

    function handleMouseDown(event) {
      isResizing = true;
      startX = event.clientX;
      startY = event.clientY;
      startWidth = node.offsetWidth;
      startHeight = node.offsetHeight;

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    function handleMouseMove(event) {
      if (!isResizing) return;
      node.style.width = `${startWidth + event.clientX - startX}px`;
      node.style.height = `${startHeight + event.clientY - startY}px`;
    }

    function handleMouseUp() {
      isResizing = false;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    const resizer = document.createElement("div");
    resizer.style.width = "10px";
    resizer.style.height = "10px";
    resizer.style.background = "gray";
    resizer.style.position = "absolute";
    resizer.style.right = "0";
    resizer.style.bottom = "0";
    resizer.style.cursor = "se-resize";
    resizer.addEventListener("mousedown", handleMouseDown);

    node.appendChild(resizer);

    return {
      destroy() {
        resizer.removeEventListener("mousedown", handleMouseDown);
        node.removeChild(resizer);
      },
    };
  }
</script>

<div
  class={`${appWindowStyles.container} ${
    isHidden && "hidden"
  } absolute top-[10%] left-[10%]`}
  use:draggable
  use:resizable
>
  <div
    class="flex flex-col rounded-lg shadow-xl bg-gray-800 text-white w-full h-full"
  >
    <div class="flex justify-between border-b border-gray-700 px-4 py-1">
      <div>
        <div
          on:click={onClose}
          class="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"
        />
        <div
          on:click={onToggle}
          class="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-500"
        />
        <div class="inline-block w-3 h-3 rounded-full bg-green-400" />
      </div>
      <span class="flex justify-center text-gray-300 text-sm font-medium">
        {title}
      </span>
      <div class="invisible w-[60.38px]" />
    </div>
    <div class="overflow-scroll h-full w-full">
      <slot />
    </div>
  </div>
</div>
