const add = require('./addition');
const subtract = require('./subtraction');
const multiply = require('./multipication');
const divide = require('./division');

function calculator(operation, a, b) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            return 'Invalid operation';
    }
}

