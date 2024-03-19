import { complexFunction } from '../src/complexExample';

// 正常なケースのテスト
test('complexFunction correctly calculates result for valid inputs', () => {
	// テスト1: a=2, b=3, c=4 の場合
	expect(complexFunction(2, 3, 4)).toBe(64);

	// テスト2: a=5, b=2, c=10 の場合
	expect(complexFunction(5, 2, 10)).toBe(75);

	// 他のテストケースを追加することもできます
});

// 例外ケースのテスト
test('complexFunction throws error for invalid inputs', () => {
	// テスト1: 負の数を含む場合
	expect(() => complexFunction(-1, 3, 4)).toThrow();

	// テスト2: 0を含む場合
	expect(() => complexFunction(0, 3, 4)).toThrow();


});

// 境界値ケースのテスト
test('complexFunction correctly handles boundary values', () => {
	// テスト1: 最小の有効な引数を使用する場合
	expect(complexFunction(1, 1, 1)).toBe(52);

	// テスト2: 最大の有効な引数を使用する場合
	expect(complexFunction(100, 100, 100)).toBe(10050);

	// 他の境界値ケースを追加することもできます
});

// 条件分岐ケースのテスト
test('complexFunction correctly handles different conditions', () => {
	// テスト1: 結果が100より大きい場合
	expect(complexFunction(9, 5, 8)).toBe(99);

	// テスト2: 結果が50より小さい場合
	expect(complexFunction(2, 2, 5)).toBe(62);

	// 他の条件分岐ケースを追加することもできます
});
