import type { PageLoad } from './$types';
import { pb } from '$lib/pb';

export const load: PageLoad = async ({ params }) => {
    let event = pb.collection('events').getOne(params.id);

    return {
        event: event
    };
};
