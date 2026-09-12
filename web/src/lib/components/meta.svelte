<script lang="ts">
	let { title, description }: { title?: string; description: string } = $props();
</script>

<svelte:head>
	{#if title}
		<title>{title} - Community Repair Maine</title>
	{:else}
		<title>Community Repair Maine</title>
	{/if}
	<meta name="description" content={description} />
</svelte:head>
