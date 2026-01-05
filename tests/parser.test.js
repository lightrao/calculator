import { calculate } from '../src/js/parser.js';

describe('Calculator Parser', () => {
    test('should add two numbers correctly', () => {
        expect(calculate('5 + 3')).toBe(8);
    });

    test('should subtract two numbers correctly', () => {
        expect(calculate('10 - 2')).toBe(8);
    });

    test('should handle mixed precedence (multiply before add)', () => {
        expect(calculate('2 + 3 * 4')).toBe(14);
    });

    test('should handle parentheses', () => {
        expect(calculate('(2 + 3) * 4')).toBe(20);
    });

    test('should handle division and multiplication', () => {
        expect(calculate('10 / 2 * 3')).toBe(15);
    });

    test('should throw error on division by zero', () => {
        expect(() => calculate('10 / 0')).toThrow('Cannot divide by zero');
    });
});
