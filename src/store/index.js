import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
    people: [],
    loginIsVisible: false,
    registerIsVisible: false,
  },
  mutations: {
    getEvents(state) {
      state.events = JSON.parse(localStorage.getItem("viewlist-events"));
    },
    getPeople(state) {
      state.people = JSON.parse(localStorage.getItem("viewlist-people"));
    },
    showLoginForm(state) {
      if (state.loginIsVisible == false) {
        state.registerIsVisible = false;
        state.loginIsVisible = true;
      } else {
        state.loginIsVisible = false;
      }
    },
    showRegisterForm(state) {
      if (state.registerIsVisible == false) {
        state.registerIsVisible = true;
        state.loginIsVisible = false;
      } else {
        state.registerIsVisible = false;
      }
    },
    hideForm(state) {
      state.registerIsVisible = false;
      state.loginIsVisible = false;
    },
  },
  actions: {
    getEvents(context) {
      context.commit("getEvents");
    },
    getPeople(context) {
      context.commit("getPeople");
    },
    showLoginForm(context) {
      context.commit("showLoginForm");
    },
    showRegisterForm(context) {
      context.commit("showRegisterForm");
    },
    hideForm(context) {
      context.commit("hideForm");
    },
  },
  modules: {},
});
