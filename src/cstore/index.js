import Vue from "vue";
import Vuex from "./cvuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    // 派生属性
    doubleCount(state) {
      return state.count + 2;
    },
  },
  mutations: {
    add(state) {
      state.count++;
    },
  },
  actions: {
    add({ commit }) {
      setTimeout(() => {
        commit("add");
      }, 1000);
    },
  },
});
