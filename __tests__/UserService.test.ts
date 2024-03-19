// UserService.test.ts

import axios from 'axios';
import { UserService } from '../src/UserService';

// モック化したaxiosインスタンスを生成
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('UserService', () => {
	let userService: UserService;

	beforeEach(() => {
		userService = new UserService();
	});

	afterEach(() => {
		jest.clearAllMocks(); // テスト後にモックの状態をリセット
	});

	it('getUserData returns user data', async () => {
		const mockUserData = { id: '1', name: 'John Doe' };
		mockedAxios.get.mockResolvedValueOnce({ data: mockUserData });

		const userData = await userService.getUserData('1');

		expect(userData).toEqual(mockUserData);
		expect(mockedAxios.get).toHaveBeenCalledTimes(1);
		expect(mockedAxios.get).toHaveBeenCalledWith('https://api.example.com/user/1');
	});

	it('getUserData handles errors', async () => {
		const errorMessage = 'API error';
		mockedAxios.get.mockRejectedValueOnce(new Error(errorMessage));

		await expect(userService.getUserData('1')).rejects.toThrow(errorMessage);
		expect(mockedAxios.get).toHaveBeenCalledTimes(1);
		expect(mockedAxios.get).toHaveBeenCalledWith('https://api.example.com/user/1');
	});
});
