import type { PageLoad } from './$types';
import { pb } from '$lib/pb';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
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
