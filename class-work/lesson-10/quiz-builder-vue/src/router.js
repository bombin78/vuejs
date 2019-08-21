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
        requiresAuth: true,
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue"),
      meta: {
        title: "Справочник",
        requiresAuth: true,
      },
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import(/* webpackChunkName: "categories" */ "./views/Categories.vue"),
      meta: {
        title: "Категории тестов",
        requiresAuth: true,
      },
    },
    {
      path: "/quiz",
      name: "quiz",
      component: () => import(/* webpackChunkName: "quiz" */ "./views/Quiz.vue"),
      meta: {
        title: "Добавление теста",
        requiresAuth: true,
      },
    },
    {
      path: "/quiz/:id",
      name: "quiz-edit",
      component: () => import(/* webpackChunkName: "quiz" */ "./views/Quiz.vue"),
      meta: {
        title: "Редактирование теста",
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import(/* webpackChunkName: "login" */ "./views/Login.vue"),
      meta: {
        title: "Вход в конструктор",
        requiresAuth: false,
      },
    },
    {
      path: "/register",
      name: "register",
      component: () => import(/* webpackChunkName: "register" */ "./views/Register.vue"),
      meta: {
        title: "Регистрация",
        requiresAuth: false,
      },
    },
    {
      path: "*", // * - совпадает с любым URL, c которым не было совпадения выше
      name: "not-found",
      component: () => import(/* webpackChunkName: "404" */ "./views/404.vue"),
      meta: {
        title: "Страница не найдена",
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.id) {
    return next({ name: "login" });
  }

  return next();
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
  if (!store.getters.preventHidePreloaderInRouter) {
    store.dispatch(HIDE_PRELOADER).catch(console.log);
  }
});

export default router;
