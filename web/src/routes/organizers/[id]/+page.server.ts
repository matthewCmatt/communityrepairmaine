import type { PageServerLoad } from './$types';
import { pb } from '$lib/pb.server';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	let organizer = await pb.collection('organizers').getOne(params.id);

	if (!organizer) {
		error(404, {
			message: 'Not found'
		});
	}

	return {
		organizer: organizer
	};
};
