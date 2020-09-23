<template>
  <div id="event-detail">
    <div class="overlay" v-on:click="hideModal"></div>
    <div class="event-detail-wrap">
      <a class="close-wrap">
        <img src="@/assets/close.svg" v-on:click="hideModal" alt="" />
      </a>
      <section class="info-wrap">
        <div class="image">
          <img :src="require(`@/assets/${event.image}`)" alt="" />
        </div>
        <div class="info">
          <p class="date">{{ event.date }}</p>
          <p class="title">{{ event.title }}</p>
          <div class="place">
            <img src="@/assets/location.svg" alt="" />
            <p>{{ event.place }}</p>
          </div>
          <div class="host-wrap">
            <p>
              Host:
            </p>
            <div class="host">
              <img :src="require(`@/assets/${event.host}`)" />
            </div>
          </div>

          <p class="participant-total">
            deltagare: {{ event.participant.length }} personer
          </p>
          <div class="participant-wrap">
            <div
              class="participant"
              v-for="participant in event.participant"
              :key="participant.id"
            >
              <img :src="require(`@/assets/${participant}`)" />
            </div>
            <button
              v-if="joinEvent && loggedIn && !oldEvents"
              class="remove-button"
              @click="removeThisEvent"
            >
              Ta bort
            </button>
            <button
              v-else-if="!oldEvents"
              class="join-button"
              @click="joinThisEvent"
            >
              Delta
            </button>
          </div>
        </div>
      </section>
      <section class="detail">
        <p class="description">{{ event.description }}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ["event", "oldEvents"],
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
    joinEvent() {
      return this.event.participant.find((p) => p == this.loginUser.image);
    },
    loginUser() {
      return this.$store.state.loginUser;
    },
  },
  methods: {
    hideModal() {
      this.$store.dispatch("hideModal");
    },
    joinThisEvent() {
      this.$store.dispatch("checkLogin");
      if (this.loggedIn === true) {
        this.$store.dispatch("joinThisEvent", this.event.id);
      }
    },
    removeThisEvent() {
      this.$store.dispatch("removeThisEvent", this.event.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#event-detail {
  .overlay {
    width: 100%;
    height: 100%;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    background: $black;
    z-index: 999;
  }

  .event-detail-wrap {
    position: fixed;
    width: 900px;
    height: auto;
    background: $light-gray2;
    z-index: 999;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $dark-gray;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .close-wrap {
      width: 40px;
      align-self: flex-end;
      position: absolute;
      padding-top: 8px;
      cursor: pointer;
    }

    .info-wrap {
      display: flex;
      padding-top: 24px;

      .image {
        width: 50%;
        height: 320px;
        overflow: hidden;
        margin-right: 24px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .info {
        .title {
          font-size: 24px;
          margin: 16px 0 40px;
        }

        .place {
          display: flex;
          align-items: center;
          margin: 16px 0;

          img {
            width: 13px;
            height: 19px;
            margin-right: 8px;
          }
        }

        .host-wrap {
          display: flex;
          align-items: center;

          .host {
            width: 40px;
            height: 40px;
            overflow: hidden;
            border-radius: 50%;
            margin-left: 8px;
            img {
              width: 40px;
              height: 40px;
              object-fit: cover;
            }
          }
        }

        .participant-total {
          margin-top: 40px;
        }

        .participant-wrap {
          display: flex;
          margin-top: 8px;

          .participant {
            width: 40px;
            height: 40px;
            overflow: hidden;
            border-radius: 50%;
            margin-right: -16px;

            img {
              width: 40px;
              height: 40px;
              object-fit: cover;
            }
          }

          button {
            min-width: 80px;
            font-size: 16px;
            line-height: 0;
            height: 40px;
            position: absolute;
            margin-left: 300px;
          }

          button:hover {
            border: 2px $pink solid;
          }

          .remove-button {
            background: $light-gray;
          }

          .remove-button:hover {
            background: $white;
            color: $dark-gray;
            border: none;
          }
        }
      }
    }

    .detail {
      margin: 40px 0;

      p {
        line-height: 180%;
      }
    }
  }
}
</style>
