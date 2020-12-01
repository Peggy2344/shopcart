import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home
  },
  {
    path: '/collection/:category',
    name: 'category',
    props: true,
    component: () => import(/* webpackChunkName: "newproducts" */ '../views/NewProducts.vue')
  },
  {
    name: 'newproduct',
    props: true,
    path: '/collection/:category/:product',
    component: () => import(/* webpackChunkName:"productdetails" */ '../views/ProductDetails.vue')
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
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "newproducts" */ '../views/Cart.vue')
  }
]

const router = new VueRouter({
  routes
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
export default router
