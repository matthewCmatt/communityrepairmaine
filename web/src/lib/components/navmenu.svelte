<script lang="ts">
	let { open } = $props();
</script>

<ul class={open ? 'open' : null}>
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

<style>
	ul {
		display: flex;
		flex-direction: column;
		overflow: hidden;

		position: absolute;
		background-color: red;
		height: 0;
		transition: height 1s ease;
	}

	ul.open {
		height: auto;
	}
</style>
