<template>
  <div id="event-list">
    <Event
      v-for="event in events"
      :key="event.id"
      v-bind:event="event"
      v-bind:oldEvents="oldEvents"
    />
  </div>
</template>

<script>
import Event from "@/components/Event.vue";

export default {
  components: {
    Event,
  },
  props: ["events", "oldEvents"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

#event-list {
  width: 100%;
  display: inline-grid;
  padding: 24px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 8px;
}

@media (max-width: 600px) {
  #event-list {
    padding: 8px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
</style>
