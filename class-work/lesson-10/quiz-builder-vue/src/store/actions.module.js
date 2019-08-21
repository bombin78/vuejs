import Categories from "../services/Categories";
import Tests from "../services/Tests";
import User from "../services/User";
import {
  LOAD_CATEGORIES,
  LOAD_TESTS,
  SHOW_PRELOADER,
  HIDE_PRELOADER,
  CHANGE_CURRENT_TEST_DATA,
  SIGNUP,
  SIGNIN,
  SIGNOUT,
} from "./actions.type";
import {
  SET_CATEGORIES,
  SET_TESTS,
  SET_CURRENT_TEST_TITLE,
  SET_CURRENT_TEST_BRIEF,
  SET_CURRENT_TEST_CATEGORY,
  SET_PRELOADER,
  SET_USER,
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
    if (typeof data.title !== "undefined") {
      commit(SET_CURRENT_TEST_TITLE, data.title);
    }
    if (typeof data.brief !== "undefined") {
      commit(SET_CURRENT_TEST_BRIEF, data.brief);
    }
    if (typeof data.category !== "undefined") {
      commit(SET_CURRENT_TEST_CATEGORY, data.category);
    }
  },
  async [SIGNUP]({ commit }, { email, password }) {
    const user = await User.createUser(email, password);
    commit(SET_USER, {
      id: user.uid,
      email: user.email,
    });
  },
  async [SIGNIN]({ commit }, { email, password }) {
    const user = await User.getUserByCredentials(email, password);
    commit(SET_USER, {
      id: user.uid,
      email: user.email,
    });
  },
  async [SIGNOUT]({ commit }) {
    await User.logout();
    commit(SET_USER, {
      id: null,
      email: "",
    });
  },
};
