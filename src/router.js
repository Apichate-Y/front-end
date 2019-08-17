import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/dashboard.vue'
import Cleaning from './views/cleaning.vue'
import Income from './views/income.vue'
import Activities from './views/activities.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/cleaning',
      name: 'cleaning',
      component: Cleaning
    },
    {
      path: '/income',
      name: 'income',
      component: Income
    },
    {
      path: '/activities',
      name: 'activities',
      component: Activities
    },
  ]
})

