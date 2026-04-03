<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

	<p>This event is called {data.event.name}</p>

	{JSON.stringify(data.event)}
