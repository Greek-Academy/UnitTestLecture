import { isLeapYear } from "../src/isLeapYear";

describe('LeapYear Test...', () => {
	test('閏年になる年のテスト', () => {
		expect(isLeapYear(2000)).toBe(true);
		expect(isLeapYear(2004)).toBe(true);
		expect(isLeapYear(2024)).toBe(true);
		expect(isLeapYear(2400)).toBe(true);
	});

	// test('閏年にならない年のテスト', () => {
	// 	expect(isLeapYear(2001)).toBe(false);
	// 	expect(isLeapYear(2002)).toBe(false);
	// 	expect(isLeapYear(2100)).toBe(false);
	// 	expect(isLeapYear(2023)).toBe(false);
	// });

	// test('例外の年のテスト', () => {
	// 	expect(isLeapYear(1900)).toBe(false);
	// 	expect(isLeapYear(2100)).toBe(false);
	// 	expect(isLeapYear(1800)).toBe(false);
	// 	expect(isLeapYear(1300)).toBe(false);
	// });
});
