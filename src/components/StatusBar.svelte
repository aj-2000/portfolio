<script lang="ts">
   import { twMerge, twJoin } from "tailwind-merge";
   import { onMount, onDestroy } from "svelte";
   import Icon from '@iconify/svelte';

   // export let isTerminalHidden = true;

   const styles = {
       statusBar: {
           container : twJoin(
               "bg-gray-900 bg-opacity-30",
               "w-full",
               "h-8",
                "flex justify-between items-center",
               "px-2 py-1",
               "text-white"
           )
       }
   }
    console.log(styles)


    let currentDateTime = new Date();
    let clockInterval = undefined;
    
    onMount(()=>{
        clockInterval = setInterval(()=>{
            currentDateTime = new Date()
       }, 1000)
    });
    
   onDestroy(()=>{
       clearInterval(clockInterval);
   })
    
   // $: formattedDateTime : `${currentDateTime.getFullYear()}`


</script>

<section class={styles.statusBar.container}>
    <div>
        <Icon icon="ri:apps-2-fill" width="22" height="22"/>
    </div>
    <div>
        {`${String(currentDateTime.getHours()).padStart(2, '0')} : ${String(currentDateTime.getMinutes()).padStart(2, '0')} : ${String(currentDateTime.getSeconds()).padStart(2,'0')}`}
    </div>
    <div class="flex gap-4">
        <Icon icon="svg-spinners:wifi" width="20" />
        <Icon icon="mingcute:battery-fill" width="22" />
    </div>
</section>

