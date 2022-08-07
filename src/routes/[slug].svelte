<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params, fetch }) => {
		const content = await fetch(`/api/${params.slug}.json`).then((r) => r.json());
		return {
			props: {
				content: content
			}
		};
	};
</script>

<script lang="ts">
	export let content: any;
</script>

{@html content}
