import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default 

new Router({
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/rockets',
      name: 'rockets',
      component: () => import('./views/Rockets.vue')
    },
    {
      path: '/launches',
      name: 'launches',
      component: () => import('./views/Launches.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
  ]
});
