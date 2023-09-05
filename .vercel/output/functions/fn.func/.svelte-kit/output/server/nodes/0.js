

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.6d943c83.js","_app/immutable/chunks/scheduler.1a2feedf.js","_app/immutable/chunks/index.cec3ed25.js"];
export const stylesheets = ["_app/immutable/assets/0.c3de7b9b.css"];
export const fonts = [];
