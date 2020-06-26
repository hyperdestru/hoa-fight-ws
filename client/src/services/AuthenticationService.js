import Api from './Api';
import jwt from 'jsonwebtoken';

function jwtSignUser() {
	
}

export default {
	register(credentials) {
		return Api().post('register', credentials);
	}
}