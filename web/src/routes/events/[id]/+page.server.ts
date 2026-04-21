import { pb } from '$lib/pb.server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	let event = await pb.collection('events').getOne(params.id);

	if (!event) {
		error(404, {
			message: 'Not found'
		});
	}

	return {
		event: event
	};
};
