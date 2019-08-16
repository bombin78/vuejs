import Vue from "vue";
import Vuex from "vuex";
import Categories from "./services/Categories";
import Tests from "./services/Tests";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categiries: [],
    tests: [],
    currentTest: {
      id: null,
      title: "",
      brief: "",
      category: null,
      questions: [],
      showPreloader: false,
    },
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_TESTS(state, tests) {
      state.tests = tests;
    },
    ADD_TEST(state, test) {
      state.tests.push(test);
    },
    SET_CURRENT_TEST(state, test) {
      state.currentTest = test;
    },
    CLEAR_CURRENT_TEST(state) {
      state.currentTest = {
        id: null,
        title: "",
        brief: "",
        category: null,
        questions: [],
      };
    },
    REMOVE_TEST(state, test) {
      const index = state.tests.indexOf(test);
      if (index !== -1) {
        state.tests.splise(index, 1);
      }
    },
    UPDATE_TEST(state, test) {
      const index = state.tests.indexOf(test);
      if (index !== -1) {
        state.tests.splise(index, 1, test);
      }
    },
    SET_PRELOADER(state, status) {
      state.showPreloader = status;
    },
  },
  actions: {
    async LOAD_CATEGORIES({ commit }) {
      commit("SET_CATEGORIES", await Categories.all());
    },
    async LOAD_TESTS({ commit }) {
      commit("SET_TESTS", await Tests.all());
    },
    async SHOW_PRELOADER({ commit }) {
      commit("SET_PRELOADER", true);
    },
    async HIDE_PRELOADER({ commit }) {
      commit("SET_PRELOADER", false);
    },
  },
});
