<script lang="ts">
	import type { Event } from '$lib/types';
	let { event }: { event: Event } = $props();
</script>

<a href={`/events/${event.id}`} title={event.name}></a>

<style>
	a {
	    display: inline-block;
		width: 30px;
		height: 30px;
		background-color: #823038; /* Svelte orange */
		border: 2px solid #fff;
		border-radius: 50% 50% 50% 0;
		transform: translate(0, 4px) rotate(-45deg);
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
		cursor: pointer;
	}
</style>
