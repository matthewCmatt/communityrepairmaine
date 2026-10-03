<script lang="ts">
	import type { PageProps } from './$types';
	import { parseEventLocal } from '#lib/datetime.js';
	import Meta from '#lib/components/meta.svelte';

	let { data }: PageProps = $props();

	const times = $derived(parseEventLocal(data.event.start_time ?? '', data.event.end_time ?? ''));
</script>

<Meta title={`${data.event.name}`} description={`${data.event.description}`}></Meta>

<h2>{data.event.name}</h2>

{data.event.description}<br />

{times.date}<br />

{times.startTime} to {times.endTime}<br />

<a href={data.event.external_links} class="button">External Link</a>

{#if data.organizers}
	<h3>Event Organizer</h3>
	{#each data.organizers as organizer}
		<a href={`/organizers/${organizer.slug}`} class="button">{organizer.name}</a>
	{/each}
{/if}

{#if data.venue}
	<h3>Location</h3>
	{data.venue.name}
	{data.venue.street_address_1}
	{data.venue.street_address_2}
	{data.venue.town}, {data.venue.state}
	{data.venue.zip_code}

	<br/>
	{data.venue.notes}
{/if}
