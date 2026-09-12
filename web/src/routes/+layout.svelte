<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/reset.css';
	import '$lib/styles/fonts.css';
	import '$lib/styles/global.css';
	import NavBar from '$lib/components/NavBar.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar />

<main>
	{@render children()}
</main>

<style>
	main {
		max-width: 70ch;
		margin: auto;
		padding: 2rem 1rem;
	}

	@media (max-width: 768px) {
		main {
		    padding: 1rem;
		}
	}
</style>
