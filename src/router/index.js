import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/new-products',
    name: 'Newproducts',
    component: () => import(/* webpackChunkName: "newproducts" */ '../views/NewProducts.vue'),
    children: [
      {
        name: 'newproduct',
        props: true,
        path: '/:product',
        component: () => import(/* webpackChunkName:"productdetails" */ './views/ProductDetails.vue')
      }
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "newproducts" */ '../views/Cart.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
