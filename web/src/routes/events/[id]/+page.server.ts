import { pb } from '#lib/pb.server.js';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { EventExpanded, Organizer } from '#lib/types/index.js';

export const load: PageServerLoad = async ({ params }) => {
	let event = await pb
		.collection('events')
		.getOne<EventExpanded>(params.id, { filter: 'published = true', expand: 'organizers,venue' });
	if (!event) {
		error(404, 'Event not found');
	}

	return {
		event: event,
		organizers: event.expand?.organizers,
		venue: event.expand?.venue
	};
};
