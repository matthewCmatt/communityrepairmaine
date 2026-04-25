<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/reset.css';
	import '$lib/styles/fonts.css';
	import '$lib/styles/global.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<a href="/"> <h1>Community Repair Maine</h1></a>
	<ul>
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
</nav>

<main>
	{@render children()}
</main>

<style>
	nav {
		padding: 3rem;
		align-items: center;

		display: flex;
		justify-content: space-between;
		background-color: var(--color-bg-header);
		color: light-dark(#f0f0f0, #f0f0f0);

		font-size: 1.6rem;

		ul {
			display: flex;
			gap: 2rem;
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
	}
</style>
