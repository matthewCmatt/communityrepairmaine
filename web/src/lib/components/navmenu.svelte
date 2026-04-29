<script lang="ts">
	let { open = $bindable() } = $props();
	import { Dialog } from 'bits-ui';
	import { slide } from 'svelte/transition';
</script>

<Dialog.Root bind:open>
	<Dialog.Content forceMount>
		{#snippet child({ props, open })}
			{#if open}
				<ul transition:slide {...props}>
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
			{/if}
		{/snippet}
	</Dialog.Content>
</Dialog.Root>

<style>
	ul {
		display: flex;
		flex-direction: column;
		overflow: hidden;

		position: absolute;
		background-color: red;
		padding: 1ch;
		width: auto;
		transition: height 0.2s ease;
		transition: background-color 0.2s ease;
	}
</style>
