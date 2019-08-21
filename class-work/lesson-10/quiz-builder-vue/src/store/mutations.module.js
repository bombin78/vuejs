import {
  SET_CATEGORIES,
  SET_TESTS,
  ADD_TEST,
  SET_CURRENT_TEST,
  SET_CURRENT_TEST_TITLE,
  SET_CURRENT_TEST_BRIEF,
  SET_CURRENT_TEST_CATEGORY,
  CLEAR_CURRENT_TEST,
  REMOVE_TEST,
  UPDATE_TEST,
  SET_PRELOADER,
  SET_USER,
} from "./mutations.type";

export default {
  [SET_CATEGORIES](state, categories) {
    state.categories = categories;
  },
  [SET_TESTS](state, tests) {
    state.tests = tests;
  },
  [ADD_TEST](state, test) {
    state.tests.push(test);
  },
  [SET_CURRENT_TEST](state, test) {
    state.currentTest = test;
  },
  [SET_CURRENT_TEST_TITLE](state, title) {
    state.currentTest.title = title;
  },
  [SET_CURRENT_TEST_BRIEF](state, brief) {
    state.currentTest.brief = brief;
  },
  [SET_CURRENT_TEST_CATEGORY](state, category) {
    state.currentTest.category = category;
  },
  [CLEAR_CURRENT_TEST](state) {
    state.currentTest = {
      id: null,
      title: "",
      brief: "",
      category: null,
      questions: [],
    };
  },
  [REMOVE_TEST](state, test) {
    const index = state.tests.indexOf(test);
    if (index !== -1) {
      state.tests.splice(index, 1);
    }
  },
  [UPDATE_TEST](state, test) {
    const index = state.tests.indexOf(test);
    if (index !== -1) {
      state.tests.splice(index, 1, test);
    }
  },
  [SET_PRELOADER](state, status) {
    state.showPreloader = status;
  },
  [SET_USER](state, user) {
    state.user = user;
  },
};
