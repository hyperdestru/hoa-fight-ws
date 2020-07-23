import Api from './Api';

export default {
	delete(credentials) {
		return Api().post(
			'settings', 
			credentials,
			{ withCredentials: true }
		);
	}
}