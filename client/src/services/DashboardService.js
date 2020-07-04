import Api from './Api';

export default {
	getStats(credentials) {
		return Api().put('dashboard', credentials);
	}
}