<template>
  <div class="home">
    <Header />
    <EventList v-bind:events="events" />
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
</style>
