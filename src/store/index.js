import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
    people: [],
    loginFormIsVisible: false,
    registerFormIsVisible: false,
    eventDetailIsVisible: false,
    loggedIn: false,
    selectedEventId: "",
  },
  mutations: {
    getEvents(state) {
      state.events = JSON.parse(localStorage.getItem("viewlist-events"));
    },
    getPeople(state) {
      state.people = JSON.parse(localStorage.getItem("viewlist-people"));
    },
    showLoginForm(state) {
      if (state.loginFormIsVisible == false) {
        state.registerFormIsVisible = false;
        state.loginFormIsVisible = true;
      } else {
        state.loginFormIsVisible = false;
      }
    },
    showRegisterForm(state) {
      if (state.registerFormIsVisible == false) {
        state.registerFormIsVisible = true;
        state.loginFormIsVisible = false;
      } else {
        state.registerFormIsVisible = false;
      }
    },
    hideModal(state) {
      state.registerFormIsVisible = false;
      state.loginFormIsVisible = false;
      state.eventDetailIsVisible = false;
    },
    checkLogin(state, id) {
      if (state.loggedIn == true) {
        state.loginFormIsVisible = false;
      } else {
        state.loginFormIsVisible = true;
        state.eventDetailIsVisible = false;
      }
      state.joinEventId = id;
    },
    showEventDetail(state, id) {
      state.eventDetailIsVisible = true;
      state.selectedEventId = id;
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
    hideModal(context) {
      context.commit("hideModal");
    },
    checkLogin(context, id) {
      context.commit("checkLogin", id);
    },
    showEventDetail(context, id) {
      context.commit("showEventDetail", id);
    },
  },
  modules: {},
});
