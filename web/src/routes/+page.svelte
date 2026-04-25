<script lang="ts">
	import { Accordion } from 'bits-ui';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Community Repair Maine</title>
</svelte:head>

<section>
	<h2>Welcome to the Maine repair community!</h2>
	<div>
		<h3>Find a Repair Event near you</h3>
		<a href="/events">Events</a>
		<ul>
			{#each data.events.items as event}
				<li>
					<a href={`/events/${event.id}`}>{event.name}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<h3>Host a new meetup</h3>
		<a href="/organizers/register">Register</a>
	</div>
</section>

<section>
	<h3>About</h3>

	<Accordion.Root type="single">
		<Accordion.Item value="item-1">
			<Accordion.Header>
				<Accordion.Trigger>What is a Repair Meetup?</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content
				>A repair meetup or repair cafe is a free event hosted, usually by volunteers, with the goal
				of helping people repair their things and
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-2">
			<Accordion.Header>
				<Accordion.Trigger>What can I bring?</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content
				>Items and services vary by meetup, but repair cafes typically focus on textiles, small
				appliances, and electronics. Large appliances and hazardous chemicals are not usually
				allowed.</Accordion.Content
			>
		</Accordion.Item>
	</Accordion.Root>

	<a href="/about">Read more about this site</a>
</section>
