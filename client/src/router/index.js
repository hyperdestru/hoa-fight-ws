import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import Ranking from '@/views/Ranking.vue';
import Dashboard from '@/views/Dashboard.vue';
import Settings from '@/views/Settings.vue';
import Rgpd from '@/views/Rgpd.vue';
import Cgu from '@/views/Cgu.vue';
import CookiesPolicy from '@/views/CookiesPolicy.vue';

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
	}
];

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes
});

export default router;
