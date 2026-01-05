import { formatAsCSV } from '../src/js/storage.js';

describe('Storage Logic', () => {
    test('should format calculation data as CSV row', () => {
        const data = {
            expression: '2 + 3',
            result: 5,
            timestamp: '2026-01-05T12:00:00.000Z'
        };
        const expected = '2026-01-05T12:00:00.000Z,2 + 3,5\n';
        expect(formatAsCSV(data)).toBe(expected);
    });
});
