

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.c5fdec42.js","_app/immutable/chunks/scheduler.1a2feedf.js","_app/immutable/chunks/index.cec3ed25.js"];
export const stylesheets = [];
export const fonts = [];
