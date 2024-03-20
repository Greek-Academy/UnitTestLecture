// UserService.ts

import axios, { Axios } from 'axios';

export class UserService {
	async getUserData(userId: string): Promise<typeof axios> {
		try {
			const response = await axios.get(`https://api.example.com/user/${userId}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
}