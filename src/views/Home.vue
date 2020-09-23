<template>
  <div id="home">
    <Header />
    <section class="hero" v-show="!loggedIn">
      <p>Hitta likasinnade vänner med meetapp!</p>
      <div class="img-wrap">
        <img src="@/assets/people.jpg" alt="" />
      </div>
      <img class="line" src="@/assets/line.png" alt="" />
      <button v-on:click="showRegisterForm">Bli medlem</button>
    </section>
    <div v-show="!loggedIn" class="upcoming-events">
      <h3>Alla kommande evenemang</h3>
      <EventList v-bind:events="validEvents" />
    </div>
    <div v-show="loggedIn" class="event-wrap">
      <div class="eventTab">
        <a
          v-for="(tab, index) in tabList"
          :key="index"
          @click="currentTab = index"
          :class="{ active: currentTab === index }"
        >
          {{ tab }}
        </a>
      </div>
      <EventList v-if="currentTab === 0" v-bind:events="validEvents" />
      <EventList v-if="currentTab === 1" v-bind:events="joinEvents" />
      <EventList v-if="currentTab === 2" v-bind:events="joinedEvents" />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import EventList from "@/components/EventList.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    EventList,
    Footer,
  },
  data: () => ({
    currentTab: 0,
    tabList: [
      "Alla kommande evenemang",
      "Evenemang du planerar att delta",
      "Evenemang du deltog",
    ],
  }),
  created() {
    this.$store.dispatch("getEvents");
    this.$store.dispatch("getPeople");
  },
  computed: {
    people() {
      return this.$store.state.people;
    },
    registerIsVisible() {
      return this.$store.state.registerIsVisible;
    },
    loggedIn() {
      return this.$store.state.loggedIn;
    },
    loginUser() {
      return this.$store.state.loginUser;
    },
    events() {
      return this.$store.state.events;
    },
    validEvents() {
      let currentTime = new Date();
      let month = currentTime.getMonth() + 1;
      let day = currentTime.getDate();
      let year = currentTime.getFullYear();
      let today = year + "-" + month + "-" + day;
      const result = this.events.filter(
        (event) => Date.parse(event.date) > Date.parse(today)
      );
      return result;
    },
    joinEvents() {
      let result = this.validEvents.filter((event) =>
        event.participant.some((p) => p.includes(this.loginUser.image))
      );
      return result;
    },
    joinedEvents() {
      let currentTime = new Date();
      let month = currentTime.getMonth() + 1;
      let day = currentTime.getDate();
      let year = currentTime.getFullYear();
      let today = year + "-" + month + "-" + day;
      let result = this.events.filter(
        (event) => Date.parse(event.date) < Date.parse(today)
      );
      result = result.filter((event) =>
        event.participant.some((p) => p.includes(this.loginUser.image))
      );
      return result;
    },
  },
  methods: {
    showRegisterForm() {
      this.$store.dispatch("showRegisterForm");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

#home {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 72px, auto, auto 40px;
  height: 100%;
  position: relative;

  .hero {
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 480px;
      object-fit: cover;
      z-index: -1;
    }

    p {
      position: absolute;
      top: 30%;
      left: 88px;
      text-align: left;
      font-size: 40px;
      font-weight: bold;
    }

    .img-wrap {
      z-index: -1;
      position: relative;
    }

    .img-wrap:after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: -webkit-linear-gradient(
        top,
        rgba(255, 255, 255, 0) 10%,
        $black 100%
      );
    }

    .line {
      position: absolute;
      height: 1000px;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.7;
    }

    button {
      position: absolute;
      top: 55%;
      left: 240px;
      transform: translate(-50%, -50%);
    }
  }

  .upcoming-events {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 108px;
    margin-bottom: 60px;
    h3 {
      font-size: 32px;
    }
  }

  .event-wrap {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 48px;
    margin-bottom: 60px;

    .eventTab {
      display: flex;
      justify-content: center;
      margin: 24px 0;

      a {
        margin: 0 24px;
        cursor: pointer;
        font-weight: bold;
        font-size: 20px;
      }

      .active {
        color: $pink;
        border-bottom: solid $pink 1px;
      }
    }
  }
}
</style>
