<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { base } from '$app/paths';

	export const load: Load = async ({ params, fetch }) => {
		const content = await fetch(`${base}/api/${params.slug}.json`).then((r) => r.json());
		console.log(`hmmm=${content}`);
		return {
			props: {
				content: content
			}
		};
	};
</script>

<svelte:head>
  <link rel="stylesheet"
    href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/github.min.css">
</svelte:head>

<script lang="ts">
	export let content: any;
</script>

<div class="content">
{@html content}
</div>

<style lang="scss">
.content {
	margin: 0 auto;
	width: 80%;
}
</style>