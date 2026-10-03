<script lang="ts">
	import { parseEventLocal } from '#lib/datetime.js';
	import type { Event, Venue } from '#lib/types/index.js';

	let { event }: { event: Event } = $props();

	let venue: Venue = $derived(event.expand?.venue);

	const times = $derived(parseEventLocal(event.start_time ?? '', event.end_time ?? ''));
</script>

<a href={`/events/${event.id}`} class="button">
	<h3>{event.name}</h3>
	{venue.street_address_1}, {venue.town}
	<br />
	{times.date}
	<br />
	{times.startTime} to {times.endTime}
</a>

<style>
	h3 {
		margin: 0;
	}

	a {
		text-decoration: inherit;
	}
</style>
