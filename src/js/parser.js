/**
 * Calculator Parser
 * Implements a Shunting-yard-inspired algorithm for evaluating mixed arithmetic expressions.
 * Follows the project principles of Simplicity, Readability, and Modular Design.
 */

const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => {
        if (b === 0) throw new Error('Cannot divide by zero');
        return a / b;
    }
};

const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2
};

/**
 * Calculates the result of a mathematical expression string.
 * Supports +, -, *, /, and parentheses.
 * 
 * @param {string} expression - The mathematical expression to evaluate.
 * @returns {number} The calculated result.
 */
export const calculate = (expression) => {
    if (!expression || typeof expression !== 'string') return 0;

    // Tokenize: numbers (including decimals) and operators/parentheses
    const tokens = expression.match(/\d+(\.\d+)?|[+\-*/()]/g);
    if (!tokens) return 0;

    const values = [];
    const operators = [];

    const applyOp = () => {
        if (values.length < 2) return;
        const op = operators.pop();
        const right = values.pop();
        const left = values.pop();
        values.push(ops[op](left, right));
    };

    for (const token of tokens) {
        if (!isNaN(token)) {
            values.push(parseFloat(token));
        } else if (token === '(') {
            operators.push(token);
        } else if (token === ')') {
            while (operators.length && operators[operators.length - 1] !== '(') {
                applyOp();
            }
            operators.pop(); // remove '('
        } else if (ops[token]) {
            while (
                operators.length &&
                operators[operators.length - 1] !== '(' &&
                precedence[operators[operators.length - 1]] >= precedence[token]
            ) {
                applyOp();
            }
            operators.push(token);
        }
    }

    while (operators.length) {
        applyOp();
    }

    return values[0];
};
