<script lang="ts">
	import { Button } from 'bits-ui';
	import type { PageProps } from './$types';
	import Meta from '$lib/components/meta.svelte';
	let { data }: PageProps = $props();
</script>

<Meta title={`${data.organizer.name}`} description={''}></Meta>

<h2>{data.organizer.name}</h2>

<h3>About</h3>

{#if data.organizer.website}
	<Button.Root href={data.organizer.website} class="button">Website</Button.Root>
{/if}

<h3>Events</h3>
<ol>
	{#each data.events as event}
		<li>
			<Button.Root href={`/events/${event.id}`} class="button">{event.name}</Button.Root>
		</li>
	{/each}
</ol>
