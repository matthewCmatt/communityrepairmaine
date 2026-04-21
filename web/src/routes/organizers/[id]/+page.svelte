<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<p>This organizer is called {data.organizer.name}</p>

{JSON.stringify(data.organizer)}
