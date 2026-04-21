<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<hgroup>
	<h2>Event Organizers</h2>
	<p>These individuals or organizations create repair events</p>
</hgroup>

<ul>
	{#each data.organizers.items as org}
		<li>
			<a href={`/organizers/${org.id}`}>
				{org.name}
			</a>
		</li>
	{/each}
</ul>
