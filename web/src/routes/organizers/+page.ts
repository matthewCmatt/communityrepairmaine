import type { PageLoad } from './$types';
import { pb } from '$lib/pb';

export const load: PageLoad = async ({ params }) => {
    let organizers = await pb.collection('organizers').getList(1, 20);

    return {
        organizers: organizers
    };
};
