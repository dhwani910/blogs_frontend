<template>
  <div id="app">
    <h1>My First Full Stack</h1>
    <landing-page></landing-page>
    <posts></posts>
    <!-- <div v-for="post in posts" :key="post.postId">
      <posts :postObject="post"></posts>

    </div> -->
    
   
    
  </div>
</template>

<script>
import LandingPage from './components/Landing.vue';
import Posts from '@/components/Posts.vue';




export default {
  name: 'App',
  components: {
    LandingPage,
    Posts, 
  },
  data(){
    return {
      posts: [],
    }
  }
    
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
