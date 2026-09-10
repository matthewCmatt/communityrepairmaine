<script lang="ts">
	import { Button } from 'bits-ui';
	import type { PageProps } from './$types';
	import Meta from '$lib/components/meta.svelte';
	let { data }: PageProps = $props();
</script>

<Meta title={`${data.organizer.name}`} description={''}></Meta>

<h2>{data.organizer.name}</h2>

{#if data.organizer.town}
	<h4>{data.organizer.town}</h4>
{/if}

{#if data.organizer.website}
	<Button.Root href={data.organizer.website} class="button">Website</Button.Root>
{/if}

<h3>Events</h3>
<ol>
    {#if Array.isArray(data.events) && data.events.length < 1}
        This organizer doesn't have any events yet.
    {/if}
	{#each data.events as event}
		<li>
			<Button.Root href={`/events/${event.id}`} class="button">{event.name}</Button.Root>
		</li>
	{/each}
</ol>
