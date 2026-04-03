import type { PageLoad } from './$types';
import { pb } from '$lib/pb';

export const load: PageLoad = async ({ params }) => {
	// let events = ['event1', 'event2'];

	let events = pb.collection('events').getList(1, 20);

	return {
		events: events
	};
};
