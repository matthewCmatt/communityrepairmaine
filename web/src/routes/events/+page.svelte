<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

</script>

<ol>
        {#each data.events.items as event}
            <li>
                <a href={`/events/${event.id}/`}>
                    {event.name}
                </a>
            </li>
        {/each}
</ol>
