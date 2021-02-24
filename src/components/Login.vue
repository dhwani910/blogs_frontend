<template>
    <div class="login">
        <div class="title">
            <h2>Already have an account ??</h2>
            <h3>Login here!</h3>
        </div>
        <p>Username</p>
        <input type="text" v-model="username" placeholder="name">
        <p>password</p>
        <input type="text" v-model="password" placeholder="password">
        <button @click="login()" type="submit" :hide = hide>Login </button>
        <div v-if="success">
            <p> welcome {{username}}</p>
        </div>
        <div v-if="error">
            <p>Invalid Username or Password</p>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
export default {
    name: 'Login',
    data(){
        return {
            username: "",
            password: "",
            hide: false,
            success: false,
            error: false
        };
    },
    methods: {
        login(){
            this.hide = true
            axios.request({
                url: "http://localhost:5000/api/login",
                method: "POST",
                data: {
                    username: this.username,
                    password: this.password
                }
            }).then((response) => {
                console.log(response);
                this.success = true;
                cookies.set("session", response.data.loginToken);
                cookies.set("userId", response.data.userId);
                // location.reload();
                alert("Login success")
            }).catch((error) => {
                console.log(error);
                this.error = true;
                this.hide = false
            })
        }
    }
}
</script>

<style scoped>
.title{
    background-color: skyblue;
}

</style>