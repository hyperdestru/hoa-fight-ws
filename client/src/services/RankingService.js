import Api from './Api';

export default {
	getRanking() {
		return Api().get('ranking', { withCredentials: true });
	}
}