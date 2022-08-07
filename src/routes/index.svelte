<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit"
    import { base } from '$app/paths';

	export const load: Load = async ({ fetch }) => {
		const posts = await fetch(`${base}/api/posts.json`);
        return {
			status: posts.status,
			props: {
				postTitles: posts.ok && (await posts.json()),
			},
		};
	};
</script>

<script lang="ts">
	export let postTitles: string[];
</script>

<div>
	<h1>roiducto Blog</h1>
	{#each postTitles as title}
		<a href="{base}/post/{title}"><p class="info">{title}</p></a>
	{/each}
</div>
