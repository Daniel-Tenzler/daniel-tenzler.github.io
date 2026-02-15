/**
 * Format a date to a readable string
 * @param date - Date object or ISO date string
 * @returns Formatted date string (e.g., "January 15, 2026")
 */
export const formatDate = (date: Date | string): string => {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};
