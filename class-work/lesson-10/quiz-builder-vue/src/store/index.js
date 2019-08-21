import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.module";
import actions from "./actions.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    tests: [],
    currentTest: {
      id: null,
      title: "",
      brief: "",
      category: null,
      questions: [],
    },
    showPreloader: false,
    user: {
      id: null,
      email: "",
    },
  },
  mutations,
  actions,
  getters: {
    preventHidePreloaderInRouter(state) {
      return state.categories.length === 0;
    },
  },
});
