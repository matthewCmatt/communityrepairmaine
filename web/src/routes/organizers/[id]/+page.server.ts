import type { PageServerLoad } from './$types';
import { pb } from '$lib/pb.server';
import { error } from '@sveltejs/kit';
import type { Event, Organizer } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	let organizer = await pb.collection('organizers').getOne<Organizer>(params.id);
	let events;
	try {
		events = await pb.collection('events').getFullList<Event>({
			filter: `organizer = "${organizer.id}"`
		});
	} catch (err) {
		console.log(err);
	}

	if (!organizer) {
		error(404, {
			message: 'Not found'
		});
	}

	return {
		organizer: organizer,
		events: events
	};
};
