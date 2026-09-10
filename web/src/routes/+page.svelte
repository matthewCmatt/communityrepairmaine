<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	import Meta from '$lib/components/meta.svelte';
	import EventCard from '$lib/components/EventCard.svelte';
</script>

<Meta title="Home" description="Home" />

<svelte:head>
	<title>Community Repair Maine</title>
</svelte:head>

<section>
	<h2>Welcome to the Maine repair community!</h2>
	<div>
		<h3>Find a Repair Event near you</h3>
		<br />
		<ul class="events">
			{#each data.events as event}
				<li>
					<EventCard {event} />
				</li>
			{/each}
		</ul>
		<a href="/events" class="button">All Events</a>
	</div>

	<hr />

	<div class="side-by-side">
		<div>
			<h3>Host a new meetup</h3>
			<a href="/organizers/register" class="button">Register</a>
		</div>
		<div>
			<h3>Volunteer at a meetup</h3>
			<a href="/volunteer" class="button">Volunteer</a>
		</div>
	</div>
</section>

<hr />

<section>
	<h3>About</h3>

	<hgroup>
		<h4>What is a Repair Meetup?</h4>
		<p>
			A repair meetup or repair cafe is a free event hosted, usually by volunteers, with the goal of
			helping people repair their things and
		</p>
	</hgroup>

	<hgroup>
		<h4>What can I bring?</h4>
		<p>
			Items and services vary by meetup, but repair cafes typically focus on textiles, small
			appliances, and electronics. Large appliances and hazardous chemicals are not usually allowed.
		</p>
	</hgroup>

	<a href="/about" class="button">Read more about this site</a>
</section>

<style>
	@media (min-width: 600px) {
		.side-by-side {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}

	.events {
		display: grid;

		li {
		    display: flex;
						flex-direction: column;
		}
	}
</style>
