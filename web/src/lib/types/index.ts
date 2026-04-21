/* =========================
   Shared
========================= */

export interface BaseRecord {
	id: string;
	created: string; // ISO timestamp
	updated: string; // ISO timestamp
}

/* =========================
   Users
========================= */

export interface User extends BaseRecord {
	email: string;
	emailVisibility?: boolean;
	verified?: boolean;

	name?: string;
	avatar?: string; // file name/path
	title?: string;

	organizations?: string[]; // relation (many)
}

/* =========================
   Organizers
========================= */

export interface Organizer extends BaseRecord {
	name?: string;
	website?: string;
	email?: string;
}

/* =========================
   Events
========================= */

export interface Event extends BaseRecord {
	name?: string;
	start_time?: string; // ISO date
	end_time?: string; // ISO date
	description?: string;
	location?: string;
	external_links?: string;

	organizer?: string; // relation → Organizer.id
}

/* =========================
   Venues
========================= */

export interface Venue extends BaseRecord {
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
