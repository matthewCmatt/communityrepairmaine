<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<a href="/"> <h1>Community Repair Maine</h1></a>
	<ul>
		<li>
			<a href="/events/">Events</a>
		</li>
		<li>
			<a href="/organizers/">Organizers</a>
		</li>
		<li>
			<a href="/about/">About</a>
		</li>
	</ul>
</nav>

{@render children()}
