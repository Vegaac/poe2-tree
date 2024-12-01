import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.b9bHBrWA.js","_app/immutable/chunks/disclose-version.BfQHp_Ew.js","_app/immutable/chunks/runtime.MQeEcWcl.js"];
export const stylesheets = ["_app/immutable/assets/0.B17VTF7W.css"];
export const fonts = [];
