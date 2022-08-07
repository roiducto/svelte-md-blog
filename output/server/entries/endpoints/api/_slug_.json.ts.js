import vfile from "to-vfile";
import { unified } from "unified";
import parse from "remark-parse";
import gfm from "remark-gfm";
import remark2rehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import frontmatter from "remark-frontmatter";
import highlight from "rehype-highlight";
import "js-yaml";
import "dayjs";
let parser = unified().use(parse).use(gfm).use(frontmatter, ["yaml"]);
let runner = unified().use(remark2rehype).use(highlight).use(rehypeStringify);
function process(filename) {
  let tree = parser.parse(vfile.readSync(filename));
  let content = runner.stringify(runner.runSync(tree));
  return content;
}
const GET = async ({ params }) => {
  const slug = params.slug;
  const content = process(`src/posts/${slug}.md`);
  const body = JSON.stringify(content);
  return {
    body
  };
};
export {
  GET
};
