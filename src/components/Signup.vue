<template>
    <div class="signup">
       <h2>Create new account</h2>
        <p>Username</p>
        <input type="text" v-model="username" placeholder="name">
        <p>Password</p>
        <input type="text" v-model="password" placeholder="password"> <br>
        <button @click="signup()" type="submit" :hide = hide>Submit</button>
        <div v-if="success">
            <p>Complete Registration</p>

        </div>



    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
export default {
    name: 'Signup',
    data(){
        return {
            username: "",
            password: "",
            hide: false,
            success: false
        };
    },
    methods: {
        signup(){
            this.hide = true;
            axios.request({
                url: "http://localhost:5000/api/users",
                method: "POST",
                data: {
                    username: this.username,
                    password: this.password
                }
                
            }).then((response) => {
                console.log(response);
                cookies.set("session", response.data.loginToken);
                cookies.set("userId", response.data.userId);
                this.success = true;
                alert("account created!")
            }).catch((error) => {
                console.log(error)

            })
        }
    }
}
</script>

<style scoped>

</style>