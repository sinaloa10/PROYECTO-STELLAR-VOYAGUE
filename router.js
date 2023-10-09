import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/luna',
    component: () => import('./views/Luna.vue'), // Reemplaza 'Luna.vue' con el componente real para la carpeta 'luna'
  },
  {
    path: '/images',
    component: () => import('./views/Images.vue'), // Reemplaza 'Images.vue' con el componente real para la carpeta 'images'
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;