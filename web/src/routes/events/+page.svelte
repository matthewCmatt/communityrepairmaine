<script lang="ts">
	import type { PageProps } from './$types';
	import Meta from '$lib/components/meta.svelte';
	import EventMap from '$lib/components/EventMap.svelte';
	import EventCard from '$lib/components/EventCard.svelte';

	let { data }: PageProps = $props();
</script>

<Meta title="Events" description="List of events" />

<hgroup>
	<h2>Events</h2>
	<p>These are repair events being held soon!</p>
</hgroup>

<br />

<ol class="events">
	{#each data.events as event}
		<li>
			<EventCard {event} />
		</li>
	{/each}
</ol>

<br />

<EventMap events={data.events}></EventMap>

<style>
	.events {
		display: grid;

		li {
			display: flex;
			flex-direction: column;
		}
	}
</style>
