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