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

### The `views` Folder

![image](https://user-images.githubusercontent.com/47092464/179388205-dfd8524c-7fce-40b2-af6a-e06f5b5c4c69.png)

the views folder are what we see on the browser, to interact with
in our case here, it's the login form

The login view is the form and it will get the `username` and `password` and will
be send as POST through `axios`, then it should receive the response,

one of my highlight here is the response code, 200 for admin, 201 for users, and 404
for unsuccessful attempts

`Login.vue`

```
<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
	name: 'Login',
	data() {
		return {
			ip: "",
			input: {
				username: "",
				password: ""
			},
			response: "",
			//postBody: "",
			//errors: []
		}
	},
	methods: {
		login() {
			axios({
				method: "POST",
				"url": "http://127.0.0.1:8000/api/authenticate",
				"data": this.input,
				"headers": {
					"content-type": "application/json"
				}
			}).then(result => {
				this.response = result.data;
				console.log(result.status);
				//obj2 = JSON.stringify(result.data)
				//obj3 = JSON.parse(obj2)
				//JSON.parse(JSON.stringify(result.data))

				this.$router.replace({
					name: result.status


				});

			}, error => {
				//console.error(error);
				this.$router.replace({
					name: "Error"


				});
			});


			//axios.post(`https://apimocha.com/jdevstatic/example/3`, {
			//  body: this.postBody
			//})
			//.then(response => {})
			//.catch(e => {
			//  this.errors.push(e)
			//})

			//this.$router.push({path: "/api/cruds" });

			//window.location.href = "http://127.0.0.1:8000/api/authenticate"

			//console.log(result.data);

			//axios({
			//  method: "post",
			//  url: "https://apimocha.com/jdevstatic/example",
			//  data: this.input,
			//  headers: { "Content-Type": "multipart/form-data" },
			//})
			//.then(function (response) {
			//handle success
			//console.log(response);
			//})
			//.catch(function (response) {
			//handle error
			//console.log(response);
			//});

			//console.log(this.input);

			//if(this.input.username != "" && this.input.password != "") {
			//if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
			//this.$emit("authenticated", true);
			//this.$router.replace({ name: "Secure" });
			//} else {
			//console.log("The username and / or password is incorrect");
			//}
			//} else {
			//console.log("A username and password must be present");
			//}

		}
	}
}
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>
```
