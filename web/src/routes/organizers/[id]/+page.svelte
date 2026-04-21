<script lang="ts">
	import { Button } from 'bits-ui';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<h2>{data.organizer.name}</h2>

<h3>About</h3>

{#if data.organizer.website}
	<Button.Root href={data.organizer.website}>Website</Button.Root>
{/if}

<h3>Events</h3>
<ol>
	{#each data.events as event}
		<li>
			<Button.Root href={`/events/${event.id}`}>{event.name}</Button.Root>
		</li>
	{/each}
</ol>
