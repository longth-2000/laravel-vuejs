import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueCookies)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.component('pagination', require('laravel-vue-pagination'));
import App from './components/App.vue'
import Welcome from './components/Welcome.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Profile from './components/Profile.vue'
import Post from './components/Post.vue'
import Pagination from './components/Pagination.vue'
import Header from "./components/Layout/Header.vue"
import Search from "./components/Search.vue"
import Approved from './components/Approved.vue'
import Notifycation from './components/Notifycation.vue'
import Draft from './components/Draft.vue'
import { store } from './vuex/store/index'
const router = new VueRouter({

  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Welcome
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default:Login
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default:Register,
      }
    },
    {
      path: '/admin',
      component:Approved,
      children: [
        {
          path: 'post',
          component: () => import('./components/admin/ApprovedPost.vue')
        },
        {
          path: 'comment',
          component: () => import('./components/admin/ApprovedComment.vue')
        },
      ]
    },
    {
      path: '/post',
      components: {
        default:Post,
        header:Header
      },
      children: [
        {
          path: 'create',
          component: () => import('./components/post/CreatePost.vue')
        },
        {
          path: 'update',
          component: () => import('./components/post/UpdatePost.vue')
        },
        {
          path: 'show/:id',
          component: () => import('./components/post/ShowPost.vue')
        },
      ]
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: Pagination
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/notifycation',
      name: 'notifycation',
      component: Notifycation
    },
    {
      path: '/draft',
      component: Draft
    },

  ],
});

const app = new Vue({
  el: '#app',
  components: { App },
  router,
  store
});