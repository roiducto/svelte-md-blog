import fs from 'fs';

export const GET = async () => {
	const posts = fs.readdirSync(`src/posts`).map((fileName) => fileName.slice(0, -3));

	const body = JSON.stringify(posts);

	return {
		body
	};
};
