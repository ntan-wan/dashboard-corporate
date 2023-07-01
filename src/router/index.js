import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Site.Dashboard.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
