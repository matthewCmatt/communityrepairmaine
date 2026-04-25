<script lang="ts">
	let { title, description } = $props();
</script>

<svelte:head>
	<title>{title} - Community Repair Maine</title>
	<meta name="description" content={description} />
</svelte:head>
