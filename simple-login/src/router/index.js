import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import LoginComponent from "../views/Login.vue"
import SecureComponent from "../views/User.vue"
//import 200Component from "../views/200.vue"

Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: {
			name: "Login"
		}
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		//component: function () {
		//return import(/* webpackChunkName: "about" */ '../views/About.vue')
		//}
	},
	{
		path: '/user',
		name: '201',
		component: function() {
			return import( /* webpackChunkName: "about" */ '../views/User.vue')
		}
	},
	{
		path: '/admin',
		name: '200',
		component: function() {
			return import( /* webpackChunkName: "about" */ '../views/Admin.vue')
		}
	},

	{
		path: '/error',
		name: 'Error',
		component: function() {
			return import( /* webpackChunkName: "about" */ '../views/Error.vue')
		}
	},

	{
		path: '/login',
		name: 'Login',
		component: function() {
			return import( /* webpackChunkName: "about" */ '../views/Login.vue')
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router