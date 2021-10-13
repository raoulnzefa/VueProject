import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accountId: null,
    remember: false
  },
  mutations: {
    update_account(state, accountId){
      return state.accountId = accountId;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getAccount: function (state) {
      return state.accountId;
    },
  },
});


