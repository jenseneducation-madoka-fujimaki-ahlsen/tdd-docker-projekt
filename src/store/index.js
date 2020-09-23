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
    loginUser: {},
    selectedEventId: "",
    error: "",
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
    joinThisEvent() {
      setTimeout(myTimer, 200);
      function myTimer() {
        alert("Du har sparat evenemanget");
      }
    },
    removeThisEvent() {
      setTimeout(myTimer, 200);
      function myTimer() {
        alert("Du tagit bort evenemanget");
      }
    },
    showEventDetail(state, id) {
      state.eventDetailIsVisible = true;
      state.selectedEventId = id;
    },
    login(state, loginUser) {
      state.loginFormIsVisible = false;
      state.loggedIn = true;
      state.loginUser = loginUser;
      setTimeout(myTimer, 200);
      function myTimer() {
        alert("Du är inloggad");
      }
    },
    register(state, newUser) {
      state.registerFormIsVisible = false;
      state.loggedIn = true;
      state.people = JSON.parse(localStorage.getItem("viewlist-people"));
      state.loginUser = newUser;
      setTimeout(myTimer, 200);
      function myTimer() {
        alert("Du har blivit medlem!");
      }
    },
    logOut(state) {
      state.loggedIn = false;
      setTimeout(myTimer, 200);
      function myTimer() {
        alert("Du har loggat ut");
      }
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
    joinThisEvent(context, id) {
      const LS_KEY = "viewlist-events";
      this.state.events
        .find((e) => e.id == id)
        .participant.push(this.state.loginUser.image);
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.events));
      context.commit("joinThisEvent");
    },
    removeThisEvent(context, id) {
      const LS_KEY = "viewlist-events";
      this.state.events
        .find((e) => e.id == id)
        .participant.splice(
          this.state.events
            .find((e) => e.id == id)
            .participant.findIndex((e) => e === this.state.loginUser.image),
          1
        );
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.events));
      context.commit("removeThisEvent");
    },
    showEventDetail(context, id) {
      context.commit("showEventDetail", id);
    },
    login(context, user) {
      if (
        this.state.people.find(
          (person) =>
            person.name == user.userName && person.password == user.password
        )
      ) {
        this.state.error = "";
        let loginUser = this.state.people.filter(
          (person) =>
            person.name == user.userName && person.password == user.password
        );
        context.commit("login", loginUser[0]);
      } else {
        this.state.error = "Kontrollera din information";
      }
    },
    register(context, newUser) {
      const LS_KEY = "viewlist-people";
      this.state.people.push(newUser);
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.people));
      context.commit("register", newUser);
    },
    logOut(context) {
      context.commit("logOut");
    },
  },
  modules: {},
});
