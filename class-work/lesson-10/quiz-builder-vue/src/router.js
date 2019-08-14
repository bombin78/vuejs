import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import(/* webpackChunkName: "categories" */ "./views/Categories.vue"),
    },
    {
      path: "/quiz",
      name: "quiz",
      component: () => import(/* webpackChunkName: "quiz" */ "./views/Quiz.vue"),
    },
  ],
});

export default router;
