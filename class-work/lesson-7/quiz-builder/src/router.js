import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
//import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Главная страница конструктора',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: 'about' */ './views/About.vue'),
      meta: {
        title: 'Справочник',
      },
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import(/* webpackChunkName: 'categories' */ './views/Categories.vue'),
      meta: {
        title: 'Категории тестов',
      },
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import(/* webpackChunkName: 'quiz' */ './views/Quiz.vue'),
      meta: {
        title: 'Добавление теста',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  // не будет работать для SSR
  document.title = to.meta.title;
  next();
});

export default router;
