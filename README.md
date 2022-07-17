# simple-login-vue
simple login vue

this will consume the Laravel Endpoints 

<https://github.com/jdevstatic/laravel-test-crud>

## Running Project
You can download this as zip file, then extract.
Then open cmd and change directory to the target project

then 

```
npm install
```

then

```
npm run serve
```

## Tutorial
### The `index.js`
The `index.js` inside router will route the pages.

as you can see from the code below, there are paths to that

```
	{
		path: '/login',
		name: 'Login',
		component: function() {
			return import( /* webpackChunkName: "about" */ '../views/Login.vue')
		}
	}
```

now here is the one I've made to actually
route them in different pages, for example, logging as 
admin or regular user


```
	{
		path: '/admin',
		name: '200',
		component: function() {
			return import( /* webpackChunkName: "about" */ '../views/Admin.vue')
		}
```

as you can see the name 200, which is the state returned from
POST response coming from the endpoint of 

`http://localhost:8000/api/authenticate`

this is the complete code,

```
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
```
