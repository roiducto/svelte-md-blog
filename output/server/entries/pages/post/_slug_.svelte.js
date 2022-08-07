import { c as create_ssr_component } from "../../../_app/immutable/chunks/index-b7561cb4.js";
import { b as base } from "../../../_app/immutable/chunks/paths-b9644fda.js";
const _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-35p1zw{margin:0 auto;width:80%}",
  map: null
};
const load = async ({ params, fetch }) => {
  const content = await fetch(`${base}/api/${params.slug}.json`).then((r) => r.json());
  console.log(`hmmm=${content}`);
  return { props: { content } };
};
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css);
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/github.min.css"}" data-svelte="svelte-1dr6p9y">`, ""}



<div class="${"content svelte-35p1zw"}"><!-- HTML_TAG_START -->${content}<!-- HTML_TAG_END -->
</div>`;
});
export {
  U5Bslugu5D as default,
  load
};
