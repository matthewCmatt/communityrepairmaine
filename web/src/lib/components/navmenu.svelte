<script lang="ts">
	let { open = $bindable() } = $props();
	import { Dialog } from 'bits-ui';
	import { slide } from 'svelte/transition';
</script>

<Dialog.Root bind:open>
	<Dialog.Content forceMount>
		{#snippet child({ props, open })}
			{#if open}
				<ul transition:slide={{ duration: 200 }} {...props}>
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
		display: grid;
		flex-direction: column;
		overflow: hidden;
		width: 100%;
		font-size: 1.2em;
		text-align: center;

		position: absolute;
		background-color: var(--color-bg-header-2);
		padding: 2ch;
		gap: 1ch;
		transition: height 0.2s ease;
		transition: background-color 0.2s ease;
		color: inherit;

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
	}
</style>
