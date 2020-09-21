<template>
  <div id="home">
    <Header />
    <EventDetail v-if="eventDetailIsVisible" />
    <section class="hero">
      <p>Hitta likasinnade vänner med meetapp!</p>
      <div class="img-wrap">
        <img src="@/assets/people.jpg" alt="" />
      </div>
      <img class="line" src="@/assets/line.png" alt="" />
      <button v-on:click="showRegisterForm">Bli medlem</button>
    </section>
    <div class="upcoming-events">
      <h3>Kommande evenemang</h3>
      <EventList v-bind:events="events" />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import EventList from "@/components/EventList.vue";
import EventDetail from "@/components/EventDetail.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    EventList,
    EventDetail,
    Footer,
  },
  data: () => ({}),
  created() {
    this.$store.dispatch("getEvents");
    this.$store.dispatch("getPeople");
  },
  computed: {
    events() {
      return this.$store.state.events;
    },
    people() {
      return this.$store.state.people;
    },
    registerIsVisible() {
      return this.$store.state.registerIsVisible;
    },
    eventDetailIsVisible() {
      return this.$store.state.eventDetailIsVisible;
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
}
</style>
