// Calculator.test.ts

import Calculator from '../src/Calculator';

describe('Calculator', () => {
	let calculator: Calculator;

	beforeEach(() => {
		calculator = new Calculator();
	});

	test('add', () => {
		expect(calculator.add(1, 2)).toBe(3);
	});

	test('subtract', () => {
		expect(calculator.subtract(5, 3)).toBe(2);
	});

	test('multiply', () => {
		expect(calculator.multiply(2, 3)).toBe(6);
	});

	test('divide', () => {
		expect(calculator.divide(6, 3)).toBe(2);
	});

	test('divide by zero', () => {
		expect(() => calculator.divide(6, 0)).toThrow("Division by zero is not allowed");
	});
});
