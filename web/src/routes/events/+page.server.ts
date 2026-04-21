import type { PageServerLoad } from './$types';
import { pb } from '$lib/pb.server';

export const load: PageServerLoad = async ({ params }) => {
	// let events = ['event1', 'event2'];

	let events = await pb.collection('events').getList(1, 20);

	return {
		events: events
	};
};
