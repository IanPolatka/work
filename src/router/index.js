import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Post from '@/components/Post'
import User from '@/components/User'

Vue.use(Router)
Vue.use(require('vue-moment'));

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User
    }
  ]
})
