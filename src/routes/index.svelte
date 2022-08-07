<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();

		return {
			props: {
				postTitles: allPosts
			}
		};
	};
</script>

<script lang="ts">
	export let postTitles: string[];
</script>

<div>
	<h1>roiducto Blog</h1>
	{#each postTitles as title}
		<a href="/{title}"><p class="info">{title}</p></a>
	{/each}
</div>
