import { pb } from '$lib/pb.server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type {
  EventExpanded, Organizer
} from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	let event = await pb
		.collection('events')
		.getOne<EventExpanded>(params.id, { filter: 'published = true', expand: 'organizers' });
	if (!event) {
		error(404, {
			message: 'Event not found'
		});
  }

	return {
    event: event,
		organizers: event.expand?.organizers
	};
};
