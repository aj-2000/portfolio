export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/bg.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.63fbc84f.js","app":"_app/immutable/entry/app.d1719104.js","imports":["_app/immutable/entry/start.63fbc84f.js","_app/immutable/chunks/scheduler.1a2feedf.js","_app/immutable/chunks/singletons.4dd7d3df.js","_app/immutable/entry/app.d1719104.js","_app/immutable/chunks/scheduler.1a2feedf.js","_app/immutable/chunks/index.cec3ed25.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
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
		}
	}
}
})();
