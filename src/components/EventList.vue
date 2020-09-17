<template>
  <div id="event-list">
    <Event v-for="event in events" :key="event.id" v-bind:event="event" />
  </div>
</template>

<script>
import Event from "@/components/Event.vue";

export default {
  components: {
    Event,
  },
  props: ["events"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

#event-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
