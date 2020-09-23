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
    <button
      v-if="joinEvent && loggedIn"
      class="remove-button"
      @click="removeThisEvent"
    >
      Ta bort
    </button>
    <button v-else class="join-button" @click="joinThisEvent">
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
  data: () => ({}),
  computed: {
    eventDetailIsVisible() {
      return this.$store.state.eventDetailIsVisible;
    },
    selectedEventId() {
      return this.$store.state.selectedEventId;
    },
    loginUser() {
      return this.$store.state.loginUser;
    },
    loggedIn() {
      return this.$store.state.loggedIn;
    },
    joinEvent() {
      return this.event.participant.find((p) => p == this.loginUser.image);
    },
  },
  methods: {
    joinThisEvent() {
      this.$store.dispatch("checkLogin");
      if (this.loggedIn === true) {
        this.$store.dispatch("joinThisEvent", this.event.id);
      }
    },
    removeThisEvent() {
      this.$store.dispatch("removeThisEvent", this.event.id);
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
  // max-width: 320px;
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

.remove-button {
  background: $light-gray;
}

.remove-button:hover {
  background: $white;
  color: $dark-gray;
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
