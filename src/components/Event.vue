<template>
  <div id="event">
    <div class="event-wrap" @click="showEventDetail(event.id)">
      <div class="image">
        <img :src="require(`@/assets/${event.image}`)" alt="" />
      </div>
      <p class="date">{{ event.date }}</p>
      <p class="title">{{ event.title }}</p>
      <div class="button-wrap">
        <div class="place-wrap">
          <div class="place">
            <img src="@/assets/location.svg" alt="" />
            <p>{{ event.place }}</p>
          </div>
          <p class="participant">
            deltagare: {{ event.participant.length }} personer
          </p>
        </div>
      </div>
    </div>
    <button class="join-button" @click="checkLogin">
      Delta
    </button>
    <EventDetail
      v-show="eventDetailIsVisible == true && selectedEventId == event.id"
      v-bind:event="event"
    />
  </div>
</template>

<script>
import EventDetail from "@/components/EventDetail.vue";
export default {
  components: {
    EventDetail,
  },
  props: ["event"],
  computed: {
    eventDetailIsVisible() {
      return this.$store.state.eventDetailIsVisible;
    },
    selectedEventId() {
      return this.$store.state.selectedEventId;
    },
  },
  methods: {
    checkLogin() {
      this.$store.dispatch("checkLogin");
    },
    showEventDetail(id) {
      this.$store.dispatch("showEventDetail", id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

#event {
  display: flex;
}

.event-wrap {
  border: solid 2px $pink;
  height: 360px;
  text-align: left;
  margin: 16px;
  background: $dark-gray;
  border-radius: 12px;
  display: grid;
  grid-auto-rows: 1fr, 4fr, 1fr, 1fr;
  padding: 8px;
  color: $light-gray;
  cursor: pointer;

  .image {
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    img {
      width: 100%;
      height: 200px;
      border-radius: 10px 10px 0 0;
      object-fit: cover;
    }
  }

  .date {
    color: $pink;
    margin-bottom: 8px;
  }

  .title {
    font-size: 22px;
    font-weight: bold;
    color: $white;
    height: 56px;
    line-height: 24px;
  }

  .button-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .place {
      display: flex;
      align-items: center;

      img {
        width: 13px;
        height: 19px;
        margin-right: 8px;
      }
    }
  }
}

button {
  min-width: 80px;
  font-size: 16px;
  line-height: 0;
  height: 40px;
  position: absolute;

  margin: 320px 8px 8px 230px;
}

#event:hover {
  .image {
    img {
      transform: scale(1.2);
      transition-timing-function: ease-out;
      transition-duration: 0.3s;
    }
  }
}
</style>
