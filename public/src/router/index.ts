import { authStore } from './../store/AuthStore';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import AuthenticatedRoot from '../views/AuthenticatedRoot.vue';
import Home from '../views/Home.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    children: [
      {
        component: AuthenticatedRoot,
        meta: { requiresAuth: true },
        name: 'authtest',
        path: '/authtest',
      },
    ],
    component: Home,
    name: 'Home',
    path: '/',
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (!!to.meta.requiresAuth && !store.getters['authStore/isAuthenticated']) {
    await store.dispatch('authStore/authenticate');
  }
  next();
});

export default router;
