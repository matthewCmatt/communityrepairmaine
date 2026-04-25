import type { PageServerLoad } from './$types';
import { pb } from '$lib/pb.server';
import type { ListResult } from 'pocketbase';
import { error } from '@sveltejs/kit';
import type { Event, Organizer } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	let events = await pb.collection('events').getList<Event>(1, 3, {
		sort: '+start_time'
	});

	return {
		events: events
	};
};
