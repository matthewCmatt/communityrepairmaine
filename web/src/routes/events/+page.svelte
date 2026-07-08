<script lang="ts">
	import type { PageProps } from './$types';
	import Meta from '$lib/components/meta.svelte';
	import EventMap from '$lib/components/eventmap.svelte';

	let { data }: PageProps = $props();
</script>

<Meta title="Events" description="List of events" />

<hgroup>
	<h2>Events</h2>
	<p>These are repair events being held soon!</p>
</hgroup>

<br />

<ol>
	{#each data.events.items as event}
		<li>
			<a href={`/events/${event.id}`} class="button">
				{event.name}
			</a>
		</li>
	{/each}
</ol>

<!-- <hr />

    <EventMap></EventMap> -->
