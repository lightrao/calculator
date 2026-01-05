import { calculate } from './parser.js';
import { formatAsCSV } from './storage.js';

const display = document.getElementById('display');
const historyLog = document.getElementById('history-log');

let currentExpression = '';

/**
 * Updates the calculator display.
 */
const updateDisplay = () => {
    display.textContent = currentExpression || '0';
};

/**
 * Appends a value to the current expression.
 */
window.appendToDisplay = (value) => {
    currentExpression += value;
    updateDisplay();
};

/**
 * Clears the display and current expression.
 */
window.clearDisplay = () => {
    currentExpression = '';
    updateDisplay();
};

/**
 * Performs the calculation, updates display, and logs to history.
 */
window.performCalculation = () => {
    if (!currentExpression) return;

    try {
        const result = calculate(currentExpression);
        
        // Prepare history entry
        const entry = {
            expression: currentExpression,
            result: result,
            timestamp: new Date().toISOString()
        };
        
        const csvRow = formatAsCSV(entry);
        
        // Display in history UI
        historyLog.textContent += csvRow;
        
        // In a real application with a backend, we would POST this to /api/save-history
        console.log('Saving to CSV:', csvRow);
        
        currentExpression = result.toString();
        updateDisplay();
    } catch (e) {
        display.textContent = 'Error';
        currentExpression = '';
    }
};

// Initial display
updateDisplay();
