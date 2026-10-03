import type { PageServerLoad } from './$types';
import { pb } from '#lib/pb.server.js';
import type { EventExpanded } from '#lib/types/index.js';

export const load: PageServerLoad = async ({ params }) => {
	let events = await pb.collection('events').getList<EventExpanded>(1, 3, {
		sort: '+start_time',
    filter: 'published = true && end_time > @now',
		expand: 'venue'
	});

	return {
		events: events.items
	};
};
