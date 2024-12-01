export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","skill-tree.png","tooltip-header.png","wechat121.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.B6iJ70K6.js","app":"_app/immutable/entry/app.B13t8irY.js","imports":["_app/immutable/entry/start.B6iJ70K6.js","_app/immutable/chunks/entry.DpZJ6Pkk.js","_app/immutable/chunks/runtime.MQeEcWcl.js","_app/immutable/chunks/paths.DRkwR0Ra.js","_app/immutable/entry/app.B13t8irY.js","_app/immutable/chunks/runtime.MQeEcWcl.js","_app/immutable/chunks/render.AMIYESjh.js","_app/immutable/chunks/disclose-version.BfQHp_Ew.js","_app/immutable/chunks/index-client.DLKo_GzW.js","_app/immutable/chunks/store.adUUYdEA.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
