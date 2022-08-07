import vfile from 'to-vfile';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import stringify from 'rehype-stringify';
import type { Compatible } from 'to-vfile/lib';

const processor = unified().use(remarkParse).use(remark2rehype).use(stringify);

export function process(filename: Compatible) {
	// What is "Compatible" type
	return processor.processSync(vfile.readSync(filename)).value;
}
