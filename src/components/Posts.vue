<template>
    <div class="container">
        <h1>Collection of blog post</h1>
        
        <create-post></create-post>
        <button @click="getPosts()">view posts</button>
        <div v-for="post in posts" :key="post[1]">
            <p>{{ post.content }}</p>
            <change-post :postId="post.id"></change-post>
        </div>
        <!-- <create-post v-if="loginToken != undefined"></create-post> -->
        
      
       

    </div>
</template>

<script>
import axios from 'axios';
// import cookies from 'vue-cookies';
import CreatePost from './CreatePost.vue';
import ChangePost from './ChangePost.vue';


export default {
    name: 'Posts',
    components: {
        CreatePost,
        ChangePost
    },
    // props: {
    //    postObject: {
    //       type: Object,
    //       required: true,
    // },
    data(){
        return {
            posts: []
        }
    },
    mounted(){
        this.getPosts();
    },
    methods: {
        getPosts(){
            axios.request({
                url: "http://localhost:5000/api/blogs",
                method: "GET",
            }).then((response) => {
                console.log(response);
                this.posts = response.data;
            }).catch((error) => {
                console.log(error);
            })
        }
    }
 

    // mounted(){
    //      axios.request({
    //             url: "http://localhost:5000/blogs",
    //             method: "GET",
    //         }).then((response) => {
    //             console.log(response);
    //             this.posts = response.data;
    //         }).catch((error) => {
    //             console.log(error);
    //         })

    // },
    // computed: {
    //     loginToken(){
    //         return cookies.get("session");
    //     }
    // }
    
    
    
}
</script>

<style scoped>
h1{
    background-color: skyblue;
}

</style>