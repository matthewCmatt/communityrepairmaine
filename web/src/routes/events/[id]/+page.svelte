<script lang="ts">
	import type { PageProps } from './$types';
	import { parseEventLocal } from '$lib/datetime';
	import { Button } from 'bits-ui';
	let { data }: PageProps = $props();

	const times = $derived(parseEventLocal(data.event.start_time ?? '', data.event.end_time ?? ''));
</script>

<h2>{data.event.name}</h2>

{data.event.location}<br />

{data.event.description}<br />

{times.date}<br />

{times.startTime} to {times.endTime}<br />

<Button.Root href={`/organizers/${data.organizer.id}`}>{data.organizer.name}</Button.Root>
