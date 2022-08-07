export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-580a26ab.js","imports":["_app/immutable/start-580a26ab.js","_app/immutable/chunks/index-561e0752.js","_app/immutable/chunks/paths-b9644fda.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/posts.json",
				pattern: /^\/api\/posts\.json$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/api/posts.json.ts.js')
			},
			{
				type: 'endpoint',
				id: "api/[slug].json",
				pattern: /^\/api\/([^/]+?)\.json$/,
				names: ["slug"],
				types: [null],
				load: () => import('./entries/endpoints/api/_slug_.json.ts.js')
			},
			{
				type: 'page',
				id: "post/[slug]",
				pattern: /^\/post\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
