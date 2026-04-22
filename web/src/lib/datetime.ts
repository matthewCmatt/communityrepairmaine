function formatTime(date: Date): string {
	return date.toLocaleTimeString('en-US', {
		hour: 'numeric',
		minute: '2-digit'
	});
}

function formatDate(date: Date): string {
	return date.toLocaleDateString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export function parseEventLocal(start: string, end: string) {
	const startDate = toJSDate(start);
	const endDate = toJSDate(end);

	return {
		date: formatDate(startDate),
		startTime: formatTime(startDate),
		endTime: formatTime(endDate)
	};
}

function toPBDateTime(date: Date): string {
	return date.toISOString().replace('T', ' ');
}

function toJSDate(dateTime: string): Date {
	return new Date(dateTime.replace(' ', 'T'));
}
