import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	state: {
		auth: false,
		userId: null
	},
	getters: {
		auth: state => {
			return state.auth;
		},
		userId: state => {
			return state.userId;
		}
	},
	mutations: {
		auth(state, v) {
			state.auth = v;
		},
		userId(state, v) {
			state.userId = v;
		}
	}
});