import type { PageServerLoad } from './$types';
import { pb } from '#lib/pb.server.js';
import { error } from '@sveltejs/kit';
import type { EventExpanded, Organizer } from '#lib/types/index.js';

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
		error(404, 'Not found');
	}

	let events = await pb.collection('events').getFullList<EventExpanded>({
		filter: `published = true && organizers ~ "${organizer.id}"`,
    sort: '+start_time',
		expand: "venue"
	});

	return {
		organizer: organizer,
		events: events
	};
};
