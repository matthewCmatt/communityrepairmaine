import type { PageServerLoad } from './$types';
import { pb } from '$lib/pb.server';
import type { Event } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	let events = await pb.collection('events').getList<Event>(1, 3, {
		sort: '+start_time',
		filter: 'published = true'
	});

	return {
		events: events.items
	};
};
