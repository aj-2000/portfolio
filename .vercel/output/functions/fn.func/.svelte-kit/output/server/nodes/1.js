

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6dc48d53.js","_app/immutable/chunks/scheduler.1a2feedf.js","_app/immutable/chunks/index.cec3ed25.js","_app/immutable/chunks/singletons.4dd7d3df.js"];
export const stylesheets = [];
export const fonts = [];
