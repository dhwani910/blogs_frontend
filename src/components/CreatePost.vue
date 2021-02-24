<template>
    <div class="container">
        <h4>Here you can write your post!</h4>
        <p>Content</p>
        <input type="text" v-model="content">
        <button @click="createPost()" :hide = hide><i class="fas fa-check-circle"></i></button>

    </div>
</template>

<script>
import axios from 'axios';
// import cookies from 'vue-cookies';
export default {
    name: 'CreatePost',
    data(){
        return {
            hide: false,
            content: "",
        };
    },
    methods: {
        createPost() {
            this.hide = true;
            axios.request({
                url: "http://localhost:5000/api/blogs",
                method: "POST",
                data: {
                    // loginToken: cookies.get("session"),
                    content: this.content
                },
                headers: {
                    "Content-Type": "application/json"
                },
                
            }).then((response) => {
                console.log(response);
                this.hide = false;
                alert("created!!..")
                // location.reload();
            }).catch((error) => {
                console.log(error);
                this.hide = false;
            })
        }
    
    },
    
}
</script>

<style scoped>

</style>