import { process } from '$lib/markdown';

export const GET = async ({ params }: any) => {
	const slug = params.slug;
	const content = process(`src/posts/${slug}.md`);
	const body = JSON.stringify(content);

	return {
		body
	};
};
