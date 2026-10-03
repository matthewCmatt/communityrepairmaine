import type { RecordModel } from 'pocketbase';

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
	external_links?: string;
	organizers?: string[]; // relation → Organizer.id
	venue?: string; // relation → Organizer.id
}

export interface Venue extends RecordModel {
	name?: string;
	street_address_1?: string;
	street_address_2?: string;
	town?: string;
	state?: string;
	zip_code?: string;
	notes?: string;
	geopoint?: {
		lat: number;
		lon: number;
	};
}

export interface EventExpanded extends Event {
	expand?: {
		organizers?: Organizer[];
		venue?: Venue;
	};
}
