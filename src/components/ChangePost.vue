<template>
    <div class="container">
        <!-- <button @click="update = true" v-if="post.user_id == userId">
            Update
        </button> -->
        <!-- <div v-if="show">
            <input type="text" v-model="content">
            <button @click="update()" :hide = update_hide>Update</button>

        </div> -->
        <button @click="hide = !hide"><i class="fas fa-pen"></i></button>
        <div v-if="!hide">
            <h3>Blog</h3>
            <input type="text" v-model="content">
            <button @click="updatePost()">Update</button>

        </div>
         <button @click="deletePost()">
            <i class="fas fa-trash-alt"></i>
        </button>

    </div>
</template>

<script>
import axios from 'axios';
// import cookies from 'vue-cookies';

export default {
    name: 'ChangePost',
    data(){
        return {
            content: "",
            hide: true
            // show: false,
            // update_hide: false,
            // delete_hide: false,
            // userId: cookies.get("userId"),
        };
    },
    props: {
        postId: {
            type: Number,
            required: true
        },
    },
    methods: {
        updatePost(){
            // this.update_hide = true
            axios.request({
                url: "http://localhost:5000/api/blogs",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    // loginToken: cookies.get("session"),
                    content: this.content,
                    id: this.postId
                }
            }).then((response) => {
                console.log(response);
                alert("updated!!")
                // this.post.content = response.data.content
            }).catch((error) => {
                console.log(error)
            })
        },
        deletePost(){
            // this.delete_hide = true
            axios.request({
                url: "http://localhost:5000/api/blogs",
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    id: this.postId,
                    // loginToken: cookies.get("session"),
                }
            }).then((response) => {
                console.log(response);
                alert("deleted...")
            }).catch((error) => {
                console.log(error);
                
            })
        }
    }
    
}
</script>

<style scoped>

</style>