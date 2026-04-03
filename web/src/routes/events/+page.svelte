<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

</script>

<ol>
	{#await data.events}
		<p>Loading events...</p>
	{:then value}
        {#each value.items as event}
            <li>
                <a href={`/events/${event.id}`}>
                    {event.name}
                </a>
            </li>
        {/each}
	{:catch error}
		<p>Error: {error.message}</p>
	{/await}
</ol>
