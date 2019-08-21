import Vue from "vue";
import ru from "vee-validate/dist/locale/ru";
import VeeValidate, { Validator } from "vee-validate";
import App from "./App.vue";
import BaseLayout from "./components/BaseLayout.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store/index";
import { auth } from "./plugins/firebase";
import { SET_USER } from "./store/mutations.type";

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Validator.localize("ru", ru);

Vue.component("BaseLayout", BaseLayout);

const app = new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount("#app");

auth.onAuthStateChanged((user) => {
  if (user) {
    store.commit(SET_USER, {
      id: user.uid,
      email: user.email,
    });
  }

  app.$forceUpdate();
});
