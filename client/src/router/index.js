import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Ranking from '@/views/Ranking.vue'
import Dashboard from '@/views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/register',
		name: 'Register',
		component: Register
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/ranking',
		name: 'Ranking',
		component: Ranking
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard
	}
]

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes
})

export default router
