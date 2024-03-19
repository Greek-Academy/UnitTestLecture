// 複雑な関数の例
export function complexFunction(a: number, b: number, c: number): number {
	if (a <= 0 || b <= 0 || c <= 0) {
		throw new Error('すべての引数は正の数でなければなりません');
	}

	let result = a + b * c;

	if (result > 100) {
		result -= 50;
	} else if (result < 50) {
		result += 50;
	}

	return result;
}