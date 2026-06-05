import type { Actions } from './$types';
import { pb } from '$lib/pb.server';

export const actions = {
	default: async (event) => {
		console.log('Registered!');
		const data = await event.request.formData();

		await pb.collection('users').create({
			email: data.get('email'),
			emailVisibility: true,
			name: data.get('name'),
			title: 'example text',
			organizations: [],
			password: '123456789',
			passwordConfirm: '123456789'
		});

		return { success: true };
	}
} satisfies Actions;
