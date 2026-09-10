import type { RecordModel } from 'pocketbase';

export interface User extends RecordModel {
	email: string;
	emailVisibility?: boolean;
	verified?: boolean;

	name?: string;
	avatar?: string; // file name/path
	title?: string;

	organizations?: string[]; // relation (many)
}

export interface Organizer extends RecordModel {
	name?: string;
	website?: string;
	email?: string;
	slug?: string;
	town?: string;
}

export interface Event extends RecordModel {
	name?: string;
	start_time?: string; // ISO date
	end_time?: string; // ISO date
	description?: string;
	location?: string;
	external_links?: string;

	organizer?: string; // relation → Organizer.id
	geolocation?: { lat: number; lon: number };
}

export interface Venue extends RecordModel {
	name?: string;

	owner?: string; // relation → User.id

	address?: string;
	geopoint?: {
		lat: number;
		lon: number;
	} | null;

	description?: string;
}

/* =========================
   Optional: Expanded helpers
========================= */

export interface EventExpanded extends Event {
	expand?: {
		organizer?: Organizer;
	};
}

export interface VenueExpanded extends Venue {
	expand?: {
		owner?: User;
	};
}

export interface UserExpanded extends User {
	expand?: {
		organizations?: Organizer[];
	};
}
