interface User {
	id: number;
	name: string;
	age: number;
}

/**
 * ユーザーオブジェクトを受け取り、成人(18歳以上)かどうかを判定
 * @param user 
 * @returns 
 */
export function isAdult(user: User): boolean {
	return user.age >= 18;
}
