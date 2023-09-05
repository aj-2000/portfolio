<script lang="ts">
    import { twJoin } from "tailwind-merge";
    import Icon from '@iconify/svelte'; 
    const dockStyles = {
        container : twJoin("absolute bottom-2 left-[50%] -translate-x-[50%] z-50",
                    "border-[0.5px] border-gray-600",
                    "rounded-3xl",
                    "bg-grey-200 bg-opacity-30 backdrop-blur-2xl",
                    "h-20 max-w-[95%] px-3 py-2",
                    "flex items-center justify-start gap-4",
                    "overflow-scroll"
                ),
        item: twJoin("drop-shadow-xl")


    }
</script>

<div class={dockStyles.container}>
    <div class={dockStyles.item}>
         <Icon icon="logos:spotify-icon" width="50" height="50" />
    </div>

    <div class={dockStyles.item}>
       <Icon icon="logos:terminal" width="50" height="50" />
    </div>

    <div class={dockStyles.item}>
        <Icon icon="logos:adobe-xd" width="50" height="50" />
    </div>

    <div class={dockStyles.item}>
        <Icon icon="logos:adobe-photoshop" width="50" height="50" />
    </div>

    <div class={dockStyles.item}>
        <Icon icon="logos:visual-studio-code" width="50" height="50" /> 
    </div>

    <div class={dockStyles.item}>
        <Icon icon="logos:chrome" width="50" height="50" />
    </div>
</div>
