import type { PageServerLoad } from './$types';
import { pb } from '#lib/pb.server.js';
import type { Event } from '#lib/types/index.js';

export const load: PageServerLoad = async ({ params }) => {
	let events = await pb.collection('events').getList<Event>(1, 3, {
		sort: '+start_time',
		filter: 'published = true && end_time > @now'
	});

	return {
		events: events.items
	};
};
