import type { PageServerLoad } from './$types';
import { pb } from '$lib/pb.server';
import { error, redirect } from '@sveltejs/kit';
import type { Event, Organizer } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	// Lookup slug
	let slugchecks = await pb
		.collection('organizers')
		.getFullList<Organizer>({ filter: `slug = "${params.id}"` });
	let organizer = slugchecks[0];

	if (!organizer) {
		// Fallback to ID
		organizer = await pb.collection('organizers').getOne<Organizer>(params.id);
  }

	if (!organizer) {
		error(404, {
			message: 'Not found'
		});
	}

	let events = await pb.collection('events').getFullList<Event>({
			filter: `published = true && organizers ~ "${organizer.id}"`,
			sort: '+start_time'
		});

	return {
		organizer: organizer,
		events: events
	};
};
