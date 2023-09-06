<script lang="ts">
  import AppWindow from "./AppWindow.svelte";

  let text = "welcome";

  export let isHidden;
  export let onToggle;

  function onClose() {
    text = "";
    onToggle();
  }
</script>

<AppWindow title="terminal" {isHidden} {onToggle} {onClose}>
  <div class="w-full h-full overflow-scroll">
    <div class="px-4 py-1 flex gap-2 font-mono">
      <span class="text-green-500 font-bold">~</span>
      <span class="text-red-500">root#</span>
      <input
        bind:value={text}
        class="min-w-0 w-full max-w-full border-none text-white bg-gray-800 outline-none"
        type="text"
      />
    </div>
    <div class="flex items-center gap-4">
      <div class="px-4">
        <pre class="text-[8px] text-red-500">
 ________        ___  ________      ___    ___                       
|\   __  \      |\  \|\   __  \    |\  \  /  /|                      
\ \  \|\  \     \ \  \ \  \|\  \   \ \  \/  / /                      
 \ \   __  \  __ \ \  \ \   __  \   \ \    / /                       
  \ \  \ \  \|\  \\_\  \ \  \ \  \   \/  /  /                        
   \ \__\ \__\ \________\ \__\ \__\__/  / /                          
    \|__|\|__|\|________|\|__|\|__|\___/ /                           
                                  \|___|/                            
                                                                     
                                                                     
 ________  ___  ___  ________  ________  _____ ______   ________     
|\   ____\|\  \|\  \|\   __  \|\   __  \|\   _ \  _   \|\   __  \    
\ \  \___|\ \  \\\  \ \  \|\  \ \  \|\  \ \  \\\__\ \  \ \  \|\  \   
 \ \_____  \ \   __  \ \   __  \ \   _  _\ \  \\|__| \  \ \   __  \  
  \|____|\  \ \  \ \  \ \  \ \  \ \  \\  \\ \  \    \ \  \ \  \ \  \ 
    ____\_\  \ \__\ \__\ \__\ \__\ \__\\ _\\ \__\    \ \__\ \__\ \__\
   |\_________\|__|\|__|\|__|\|__|\|__|\|__|\|__|     \|__|\|__|\|__|
   \|_________|                                                      
            </pre>
        <div class="flex flex-col font-mono text-sm py-2">
          <p>Welcome to my portfolio.</p>
          <p>----</p>
          <p>
            This projects source code can be found in <a
              src="https://github.com/aj-2000/portfolio"
              class="text-blue-500 font-bold underline decoration-dashed"
              >this github repo</a
            >.
          </p>
          <p>----</p>
          <p>
            For this of all available commands, type `<span
              class="font-bold text-green-500">help</span
            >`
          </p>
        </div>
      </div>
      <pre class="text-[4px]" />
    </div>
  </div>
</AppWindow>
