<template>
    <div class="container">
        
        <div class="landing">
              <button v-if="userId == undefined" @click="signup = true; login = false">
                  SignUp
              </button>
              <button v-if="userId == undefined" @click="login = true; signup = false">
                  Login
              </button>
              <!-- <button v-if="userId !== undefined" @click="logout()">
                  Logout
              </button> -->
        </div>
        <signup></signup>
        <!-- <signup v-if="signup && userId == undefined"></signup> -->
        <login v-if="login && userId == undefined"></login>


    </div>
</template>


<script>
import Login from './Login.vue'
import Signup from './Signup.vue'
import axios from 'axios';
import cookies from 'vue-cookies';
export default {
    name: 'LandingPage',
    components: {
        Login,
        Signup
    },
    data(){
        return {
            login: false,
            signup: false
        }
    },
    computed: {
        userId(){
            return cookies.get("userId");
        }
    },
    methods: {
        logout(){
            axios.request({
                url: "http://localhost:5000/blogs",
                method: "DELETE",
                data: {
                    loginToken: cookies.get("session"),
                }
            }).then((response) => {
                console.log(response);
                this.login = false;
                this.signup = false;
                cookies.remove("session");
                cookies.remove("userId");
            }).catch((error) => {
                console.log(error);
            })
        }

    }
    
}
</script>

<style scoped>

</style>