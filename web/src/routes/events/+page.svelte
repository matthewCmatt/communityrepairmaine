<script lang="ts">
	import type { PageProps } from './$types';
	import Meta from '$lib/components/meta.svelte';
	import EventMap from '$lib/components/eventmap.svelte';

	let { data }: PageProps = $props();
</script>

<Meta title="Events" description="List of events" />

<ol>
	{#each data.events.items as event}
		<li>
			<a href={`/events/${event.id}`}>
				{event.name}
			</a>
		</li>
	{/each}
</ol>

<!-- <hr />

    <EventMap></EventMap> -->
