import Categories from "../services/Categories";
import Tests from "../services/Tests";
import {
  LOAD_CATEGORIES,
  LOAD_TESTS,
  SHOW_PRELOADER,
  HIDE_PRELOADER,
  CHANGE_CURRENT_TEST_DATA,
} from "./actions.type";
import {
  SET_CATEGORIES,
  SET_TESTS,
  SET_CURRENT_TEST_TITLE,
  SET_CURRENT_TEST_BRIEF,
  SET_CURRENT_TEST_CATEGORY,
  SET_PRELOADER,
} from "./mutations.type";

export default {
  async [LOAD_CATEGORIES]({ commit, dispatch }) {
    dispatch(SHOW_PRELOADER);
    commit(SET_CATEGORIES, await Categories.all());
    dispatch(HIDE_PRELOADER);
  },
  async [LOAD_TESTS]({ commit }) {
    commit(SET_TESTS, await Tests.all());
  },
  async [SHOW_PRELOADER]({ commit }) {
    commit(SET_PRELOADER, true);
  },
  async [HIDE_PRELOADER]({ commit }) {
    commit(SET_PRELOADER, false);
  },
  async [CHANGE_CURRENT_TEST_DATA]({ commit }, data) {
    if (data.title) {
      commit(SET_CURRENT_TEST_TITLE, data.title);
    }
    if (data.brief) {
      commit(SET_CURRENT_TEST_BRIEF, data.brief);
    }
    if (data.category) {
      commit(SET_CURRENT_TEST_CATEGORY, data.category);
    }
  },
};
