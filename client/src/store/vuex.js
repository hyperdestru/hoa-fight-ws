import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,

	state: {
		auth: null,
		user: {
			id: null,
			username: null,
			email: null,
			creationDate: null
		}
	},

	getters: {
		auth: state => {
			return state.auth;
		},
		user: state => {
			return state.user;
		}
	},

	mutations: {
		auth: (state, v) => {
			state.auth = v;
		},
		user: (state, v) => {
			state.user = v;
		}
	}
});