<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

{#await data.event}
	<p>Loading event information...</p>
{:then value}
	<p>This event is called {value.name}</p>

	{JSON.stringify(value)}
{:catch error}
	<p>Error: {error.message}</p>
{/await}
