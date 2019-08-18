import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "./store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Главная страница конструктора",
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue"),
      meta: {
        title: "Справочник",
      },
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import(/* webpackChunkName: "categories" */ "./views/Categories.vue"),
      meta: {
        title: "Категории тестов",
      },
    },
    {
      path: "/quiz",
      name: "quiz",
      component: () => import(/* webpackChunkName: "quiz" */ "./views/Quiz.vue"),
      meta: {
        title: "Добавление теста",
      },
    },
    {
      path: "/quiz/:id",
      name: "quiz-edit",
      component: () => import(/* webpackChunkName: "quiz" */ "./views/Quiz.vue"),
      meta: {
        title: "Редактирование теста",
      },
    },
    {
      path: "*", // * - совпадает с любым URL, с которым не было совпадения выше
      name: "not-found",
      component: () => import(/* webpackChunkName: "quiz" */ "./views/404.vue"),
      meta: {
        title: "Страница не найдена",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  // не будет работать для SSR
  document.title = to.meta.title;
  store.dispatch("SHOW_PRELOADER").catch(console.log);
  next();
});

router.afterEach(() => {
  store.dispatch("HIDE_PRELOADER").catch(console.log);
});

export default router;
