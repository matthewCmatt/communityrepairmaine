<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

</script>

<ol>
	{#await data.events}
		<p>Loading events...</p>
	{:then value}
        {#each value.items as name}
            <li>
                {name.name}
            </li>
        {/each}
	{:catch error}
		<p>Error: {error.message}</p>
	{/await}
</ol>
