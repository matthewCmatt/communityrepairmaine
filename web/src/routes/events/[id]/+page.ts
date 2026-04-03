import type { PageLoad } from './$types';
import { pb } from '$lib/pb';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
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
