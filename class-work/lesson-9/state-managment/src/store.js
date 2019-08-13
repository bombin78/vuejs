import Vue from 'vue';
import Vuex from 'vuex';
import Categories from './services/Categories';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: [],
    },
    mutations: {
        ADD_CATEGORY(state, category) {
            state.categories.push(category);
        },
        SET_CATEGORIES(state, categories) {
            state.categories = categories;
        },
    },
    actions: {
        async LOAD_CATEGORIES(context) {

            const categories = await Categories.all();
            context.commit('SET_CATEGORIES', categories);
        },
        async CREATE_CATEGORY({commit}, category){

            const cat = await Categories.add(category);
            commit('ADD_CATEGORY', cat);
            return cat;
        },
    },
    getters: {
        primaryCategories(state){
            return state.categories.filter(cat => cat.primary);
        },
        secondaryCategories: state => state.categories.filter(cat => !cat.primary),
    },
})
