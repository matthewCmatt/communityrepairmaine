<script lang="ts">
	import type { PageProps } from './$types';
	import Meta from '$lib/components/meta.svelte';

	let { data }: PageProps = $props();
</script>

<Meta title="Organizers" description="List of organizers" />

<hgroup>
	<h2>Event Organizers</h2>
	<p>These individuals or organizations create repair events</p>
</hgroup>
<br />

<ul>
	{#each data.organizers.items as org}
		<li>
			<a href={`/organizers/${org.id}`} class="button">
				{org.name}
			</a>
		</li>
	{/each}
</ul>

<hr />

<br />

<p>Want to host your own repair event?</p>
<a href="/organizers/register" class="button">Register as an organizer</a>

<br />
