import Api from './Api';

export default {
	getStats(credentials) {
		return Api().get(
			`/dashboard?userId=${credentials}`,
			{ withCredentials: true }
		);
	}
}