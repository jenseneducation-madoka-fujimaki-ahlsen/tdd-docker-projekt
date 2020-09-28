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
    eventFormIsVisible: false,
    loggedIn: true,
    loginUser: {
      id: 0,
      name: "Madoka",
      email: "madoka@madoka.com",
      password: "madoka123",
      image: "1.jpg",
      participate: [],
      participated: [],
    },
    selectedEventId: "",
    error: "",
    setReviewIsVisible: false,
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
    showEventForm(state) {
      if (state.eventFormIsVisible == false) {
        state.eventFormIsVisible = true;
      } else {
        state.eventFormIsVisible = false;
      }
    },
    hideModal(state) {
      state.registerFormIsVisible = false;
      state.loginFormIsVisible = false;
      state.eventDetailIsVisible = false;
      state.eventFormIsVisible = false;
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
      // setTimeout(myTimer, 200);
      // function myTimer() {
      //   alert("Du har sparat evenemanget");
      // }
    },
    removeThisEvent() {
      // setTimeout(myTimer, 200);
      // function myTimer() {
      //   alert("Du tagit bort evenemanget");
      // }
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
      state.eventFormIsVisible = false;
      setTimeout(myTimer, 200);
      function myTimer() {
        alert("Du har loggat ut");
      }
    },
    hideSetReview(state) {
      state.setReviewIsVisible = false;
    },
    openSetReview(state) {
      state.setReviewIsVisible = true;
    },
    postReview(state) {
      state.setReviewIsVisible = false;
    },
    removeReview(state) {
      state.setReviewIsVisible = false;
    },
    addEvent(state) {
      state.eventFormIsVisible = false;
    },
    cancelEvent(state) {
      state.eventDetailIsVisible = false;
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
    showEventForm(context) {
      context.commit("showEventForm");
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
    async removeThisEvent(context, id) {
      const LS_KEY = "viewlist-events";
      await this.state.events
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
    hideSetReview(context) {
      context.commit("hideSetReview");
    },
    openSetReview(context) {
      context.commit("openSetReview");
    },
    postReview(context, userReview) {
      const LS_KEY = "viewlist-events";
      if (userReview.update == true) {
        this.state.events
          .find((e) => e.id == userReview.event.id)
          .reviews.filter(
            (r) => r.person == this.state.loginUser.image
          )[0].review = userReview.star;

        this.state.events
          .find((e) => e.id == userReview.event.id)
          .reviews.filter(
            (r) => r.person == this.state.loginUser.image
          )[0].comment = userReview.comment;
      } else {
        this.state.events
          .find((e) => e.id == userReview.event.id)
          .reviews.push({
            person: this.state.loginUser.image,
            review: userReview.star,
            comment: userReview.comment,
          });
      }
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.events));
      context.commit("postReview");
    },
    removeReview(context, event) {
      const LS_KEY = "viewlist-events";
      this.state.events
        .find((e) => e.id == event.id)
        .reviews.splice(
          this.state.events
            .find((e) => e.id == event.id)
            .reviews.findIndex((e) => e.person === this.state.loginUser.image),
          1
        );
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.events));
      context.commit("removeReview");
    },
    addEvent(context, newEvent) {
      const LS_KEY = "viewlist-events";
      this.state.events.push(newEvent);
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.events));
      context.commit("addEvent");
    },
    cancelEvent(context, id) {
      const LS_KEY = "viewlist-events";
      this.state.events.splice(
        this.state.events.findIndex((e) => e.id === id),
        1
      );
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.events));
      context.commit("cancelEvent");
    },
  },
  modules: {},
});
