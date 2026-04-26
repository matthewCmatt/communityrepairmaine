<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/reset.css';
	import '$lib/styles/fonts.css';
	import '$lib/styles/global.css';
	import { Menu } from 'lucide-svelte';
	import NavMenu from '$lib/components/navmenu.svelte';

	let { children } = $props();

	let menuOpen = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<a href="/"> <h1>Community Repair Maine</h1></a>
	<ul class="wide">
		<li>
			<a href="/events">Events</a>
		</li>
		<li>
			<a href="/organizers">Organizers</a>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
	</ul>
	<button class="narrow" title="Toggle navigation menu" onclick={() => (menuOpen = !menuOpen)}>
		<Menu strokeWidth="3" />
	</button>
</nav>
<NavMenu open={menuOpen} />

<main>
	{@render children()}
</main>

<style>
	nav {
		padding: 2rem 2.2rem;
		align-items: center;

		display: flex;
		justify-content: space-between;
		background-color: var(--color-bg-header);
		color: light-dark(#f0f0f0, #f0f0f0);

		font-size: 1.4rem;

		ul {
			display: flex;
			gap: 2rem;
			font-size: 1rem;
		}
	}

	a {
		text-decoration: none;
		color: inherit;
		transition: color 0.1s ease;

		&:visited {
			color: inherit;
		}

		&:hover {
			color: var(--color-accent);
		}
	}

	main {
		max-width: 70ch;
		margin: auto;
		padding: 2rem 0;
	}

	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}

	@media (max-width: 768px) {
		/* Styles for tablets and larger */
		.wide {
			display: none;
		}
	}

	@media (min-width: 769px) {
		/* Styles for tablets and larger */
		.narrow {
			display: none;
		}
	}
</style>
