import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { pb } from '$lib/pb.server';

export const load: PageServerLoad = async ({ params, url }) => {
	// let events = ['event1', 'event2'];
	let page = parseInt(url.searchParams.get('page') ?? '1');

	let events = await pb.collection('events').getList(page, 10);

	if (events.items.length == 0) {
		error(404, {
			message: 'Page not found'
		});
	}

	let total = events.totalPages;
	let nextPage = null,
		prevPage = null;
	if (page != 1) prevPage = page - 1;
	if (page < total - 1) nextPage = page + 1;

	return {
		events: events,
		nextPage: nextPage,
		prevPage: prevPage
	};
};
