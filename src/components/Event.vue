<template>
  <div id="event">
    <div class="event-wrap" @click="showEventDetail(event.id)">
      <div class="image">
        <img :src="require(`@/assets/${event.image}`)" alt="" />
      </div>
      <div class="date-time">
        <p class="date">{{ event.date }}</p>
        <p class="time">{{ event.time }}</p>
      </div>
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
        <span class="is-host" v-if="isHost">Du är värd</span>
      </div>
    </div>
    <button
      v-if="joinEvent && loggedIn && !oldEvents && !isHost"
      class="remove-button"
      @click="removeThisEvent"
    >
      Ta bort
    </button>
    <button
      v-else-if="!oldEvents && !isHost"
      class="join-button"
      @click="joinThisEvent"
    >
      Delta
    </button>
    <Review
      class="review"
      v-if="oldEvents"
      v-bind:event="event"
      @click.native="showEventDetail(event.id)"
    />
    <EventDetail
      v-show="eventDetailIsVisible == true && selectedEventId == event.id"
      v-bind:event="event"
      v-bind:oldEvents="oldEvents"
    />
  </div>
</template>

<script>
import EventDetail from "@/components/EventDetail.vue";
import Review from "@/components/Review.vue";
export default {
  components: {
    EventDetail,
    Review,
  },
  data: () => ({
    isHost: false,
  }),
  props: ["event", "oldEvents"],
  mounted() {
    if (this.loginUser.image == this.event.host) {
      this.isHost = true;
    }
  },
  watch: {
    "loginUser.image": function(val) {
      if (val == this.event.host) {
        this.isHost = true;
      }
    },
  },
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
  position: relative;
  width: 100%;
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

  .date-time {
    display: flex;
  }

  .date {
    color: $pink;
    margin-bottom: 8px;
  }

  .time {
    color: $pink;
    margin-bottom: 8px;
    margin-left: 8px;
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

    .is-host {
      color: $pink;
      margin-right: 8px;
    }
  }
}

button {
  min-width: auto;
  font-size: 16px;
  line-height: 0;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  bottom: 32px;
  right: 28px;
  position: absolute;
}

.remove-button {
  background: $black;
}

.remove-button:hover {
  background: $white;
  color: $dark-gray;
}

.review {
  min-width: auto;
  position: absolute;
  bottom: 168px;
  right: 28px;
  cursor: pointer;
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
