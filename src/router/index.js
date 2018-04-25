import Vue from 'vue'
import Router from 'vue-router'
import shopHome from '@/components/pages/shopHome'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'shopHome',component: shopHome}
  ]
})
