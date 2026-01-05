/**
 * Storage Logic for CSV persistence.
 */

/**
 * Formats calculation object into a CSV row string.
 * @param {Object} data - { expression, result, timestamp }
 * @returns {string} CSV row
 */
export const formatAsCSV = (data) => {
    return `${data.timestamp},${data.expression},${data.result}\n`;
};
