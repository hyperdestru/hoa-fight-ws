import Api from './Api';

export default {
	getStats(credentials) {
		return Api().get('dashboard', credentials);
	}
}