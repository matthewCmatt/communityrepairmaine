<script lang="ts">
	import type { Event } from '$lib/types';

	let { event }: { event: Event } = $props();
</script>

<li>
	<a href={`/events/${event.id}`} class="button">
		{event.name}
	</a>
</li>
