import Vue from 'vue';
import VueRouter from 'vue-router';
import FeedPage from "../views/Feed.vue";



Vue.use(VueRouter)

const routes = [
  {
    path: '/feed',
    name: 'feed-page',
    component: FeedPage
    
  },
 
 
]

const router = new VueRouter({
  routes
})

export default router
