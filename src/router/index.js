import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/Home.vue';
import Products from '@/views/products/Products.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products/:tag?',
    name: 'Products',
    component: Products,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
