import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/vuex';
import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import Ranking from '@/views/Ranking.vue';
import Dashboard from '@/views/Dashboard.vue';
import Settings from '@/views/Settings.vue';
import Rgpd from '@/views/Rgpd.vue';
import Cgu from '@/views/Cgu.vue';
import CookiesPolicy from '@/views/CookiesPolicy.vue';
import The404 from '@/views/404.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/register',
		name: 'register',
		component: Register
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/ranking',
		name: 'ranking',
		component: Ranking,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		component: Dashboard,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/settings',
		name: 'settings',
		component: Settings,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/rgpd',
		name: 'rgpd',
		component: Rgpd
	},
	{
		path: '/cgu',
		name: 'cgu',
		component: Cgu
	},
	{
		path: '/cookies',
		name: 'cookies',
		component: CookiesPolicy
	},
	{
		path: '*',
		name: '404',
		component: The404
	}
];

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes
});

router.beforeEach(function(to, from, next) {
	if (to.meta.requiresAuth === true && store.getters.auth !== true) {
		next({ name: 'login' });
	} else {
		next();
	}
});

export default router;
