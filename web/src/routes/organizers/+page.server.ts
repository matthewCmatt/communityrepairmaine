import type { PageServerLoad } from './$types';
import { pb } from '#lib/pb.server.js';

export const load: PageServerLoad = async ({ params }) => {
	let organizers = await pb.collection('organizers').getList(1, 20);

	return {
		organizers: organizers
	};
};
