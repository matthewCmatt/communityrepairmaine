<script lang="ts">
	import type { PageProps } from './$types';
	let { params }: PageProps = $props();

</script>

<h1>This event is called {params.name}</h1>