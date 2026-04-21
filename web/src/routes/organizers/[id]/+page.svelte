<script lang="ts">
	import { Button } from 'bits-ui';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<h1>{data.organizer.name}</h1>

<h2>About</h2>

{#if data.organizer.website}
	<Button.Root href={data.organizer.website}>Website</Button.Root>
{/if}

<h2>Events</h2>
<ol>
	{#each data.events as event}
		<li>
			<Button.Root href={`/events/${event.id}`}>{event.name}</Button.Root>
		</li>
	{/each}
</ol>
