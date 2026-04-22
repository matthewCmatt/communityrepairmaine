import { pb } from '$lib/pb.server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Event, Organizer } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	let event = await pb.collection('events').getOne<Event>(params.id);
	let organizer = await pb.collection('organizers').getOne<Organizer>(event.organizer ?? '');

	if (!event) {
		error(404, {
			message: 'Not found'
		});
	}

	return {
		event: event,
		organizer: organizer
	};
};
