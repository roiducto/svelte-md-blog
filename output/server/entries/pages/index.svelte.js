import { c as create_ssr_component, a as each, e as escape } from "../../_app/immutable/chunks/index-b7561cb4.js";
import { b as base } from "../../_app/immutable/chunks/paths-b9644fda.js";
const load = async ({ fetch }) => {
  const posts = await fetch(`${base}/api/posts.json`);
  return {
    status: posts.status,
    props: {
      postTitles: posts.ok && await posts.json()
    }
  };
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { postTitles } = $$props;
  if ($$props.postTitles === void 0 && $$bindings.postTitles && postTitles !== void 0)
    $$bindings.postTitles(postTitles);
  return `<div><h1>roiducto Blog</h1>
	${each(postTitles, (title) => {
    return `<a href="${escape(base, true) + "/post/" + escape(title, true)}"><p class="${"info"}">${escape(title)}</p></a>`;
  })}</div>`;
});
export {
  Routes as default,
  load
};
