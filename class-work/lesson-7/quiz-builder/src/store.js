import Vue from 'vue';
import Vuex from 'vuex';
import Categories from './services/Categories';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async LOAD_CATEGORIES({ commit }) {
      commit('SET_CATEGORIES', await Categories.all());
    },
  },
});
