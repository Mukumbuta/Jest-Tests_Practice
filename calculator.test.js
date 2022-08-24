const Calculator = require("./calculator");

describe('Add method', () => {
    test('Correctly adds two numbers and return the result', () => {
        let num1 = 4;
        let num2 = 3;
        expect(Calculator.add(num1, num2)).toBe(7);
    });

    test('Returns undefined', () => {
        let num1;
        let num2;
        expect(Calculator.add(num1, num2)).toBeNaN();
    });

    test('Should not return concatenated string', () => {
        let num1 = 'Come';
        let num2 = 'here!';
        expect(Calculator.add(num1, num2)).toBe('Error: Enter numbers only!');
    });
});


describe('Subtract method', () => {
    test('Correctly subtract two numbers and return the result', () => {
        expect(Calculator.subtract(2, 4)).toBe(-2);
    });

    test('Returns NaN', () => {
        let num1;
        let num2;
        expect(Calculator.subtract(num1, num2)).toBeNaN();
    });

    test('Should throw an error', () => {
        let num1 = 'Come';
        let num2 = 'here!';
        expect(Calculator.subtract(num1, num2)).toBe('Error: Enter numbers only!');
    });
});

describe('Mutiply method', () => {
    test('Correctly multiplies two numbers and return the result', () => {
        expect(Calculator.multiply(2, 4)).toBe(8);
    });

    test('Returns NaN', () => {
        let num1;
        let num2;
        expect(Calculator.subtract(num1, num2)).toBeNaN();
    });

    test('Should throw an error', () => {
        let num1 = 'Come';
        let num2 = 'here!';
        expect(Calculator.subtract(num1, num2)).toBe('Error: Enter numbers only!');
    });
});

describe('Divide method', () => {
    test('Correctly divides two numbers and return the result', () => {
        expect(Calculator.divide(2, 4)).toBe(0.5);
    });

    test('Returns NaN', () => {
        let num1;
        let num2;
        expect(Calculator.subtract(num1, num2)).toBeNaN();
    });

    test('Should throw an error', () => {
        let num1 = 'Come';
        let num2 = 'here!';
        expect(Calculator.subtract(num1, num2)).toBe('Error: Enter numbers only!');
    });
});