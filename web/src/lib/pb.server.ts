import PocketBase from 'pocketbase';
import { POCKETBASE_URL } from '$app/env/private';

export const pb = new PocketBase(POCKETBASE_URL);
