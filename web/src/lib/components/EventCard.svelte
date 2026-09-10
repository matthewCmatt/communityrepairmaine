<script lang="ts">
	import { parseEventLocal } from '$lib/datetime';
	import type { Event } from '$lib/types';

	let { event }: { event: Event } = $props();

	const times = $derived(parseEventLocal(event.start_time ?? '', event.end_time ?? ''));
</script>

<a href={`/events/${event.id}`} class="button">
	<h3>{event.name}</h3>
	{event.location}
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
