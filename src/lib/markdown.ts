import vfile from 'to-vfile';
import {unified} from 'unified';
import parse from 'remark-parse';
import gfm from 'remark-gfm';
import remark2rehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import frontmatter from 'remark-frontmatter';
import highlight from 'rehype-highlight';
import yaml from 'js-yaml';
import dayjs from 'dayjs';
import type { Compatible } from 'to-vfile/lib';

let parser = unified()
    .use(parse)
    .use(gfm)
    .use(frontmatter, ['yaml']);

let runner = unified()
    .use(remark2rehype)
    .use(highlight)
    .use(rehypeStringify);

export function process(filename: Compatible) {
  let tree = parser.parse(vfile.readSync(filename));
  let content = runner.stringify(runner.runSync(tree));

  return content;
}
