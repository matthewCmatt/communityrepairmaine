import { pb } from '$lib/pb.server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Event, Organizer } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	let event = await pb
		.collection('events')
		.getOne<Event>(params.id, { filter: 'published = true' });
	if (!event) {
		error(404, {
			message: 'Event not found'
		});
	}

	if (!event.organizer) {
		return {
			event: event,
			organizer: null
		};
	}

	let organizer = await pb.collection('organizers').getOne<Organizer>(event.organizer);

	return {
		event: event,
		organizer: organizer
	};
};
