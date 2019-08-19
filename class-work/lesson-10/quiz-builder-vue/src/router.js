import Vue from "vue";
import Router from "vue-router";
import store from "./store";
import Home from "./views/Home.vue";
import { SHOW_PRELOADER, HIDE_PRELOADER } from "./store/actions.type";

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
      path: "*", // * - совпадает с любым URL, c которым не было совпадения выше
      name: "not-found",
      component: () => import(/* webpackChunkName: "404" */ "./views/404.vue"),
      meta: {
        title: "Страница не найдена",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  // объект to соответствует машруту, КУДА пытается попасть пользователь
  document.title = to.meta.title;
  store.dispatch(SHOW_PRELOADER).catch(console.log);
  // next() - функция обратного вызова, которая передаёт управление следующему хуку,
  // а также позволяет блокировать переходы к конкретным машрутам или выполнять редиректы
  next();
});

router.afterEach(() => {
  store.dispatch(HIDE_PRELOADER).catch(console.log);
});

export default router;
