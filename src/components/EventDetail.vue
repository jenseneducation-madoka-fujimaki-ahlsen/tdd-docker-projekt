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
          <div class="date-time">
            <p class="date">{{ event.date }}</p>
            <p class="time">{{ event.time }}</p>
          </div>
          <p class="title">{{ event.title }}</p>
          <div class="place">
            <img src="@/assets/location.svg" alt="" />
            <p>{{ event.place }}</p>
          </div>
          <div class="host-wrap">
            <p>
              Värd:
            </p>
            <div class="host">
              <img :src="require(`@/assets/${event.host}`)" />
            </div>
            <button
              v-if="isHost && !oldEvents"
              class="cancel-button"
              @click="cancelEvent"
            >
              Ställa in evenemanget
            </button>
          </div>

          <p class="participant-total">
            Deltagare: {{ event.participant.length }} personer
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
          </div>
        </div>
      </section>
      <section class="detail" :class="{ 'detail-with-review': oldEvents }">
        <div class="review-button-wrap" v-if="oldEvents">
          <Review
            class="review"
            v-bind:event="event"
            v-bind:isDetailPage="isDetailPage"
          />
          <div class="button-wrap">
            <button @click="openSetReview">Recensera</button>
            <a :href="'#review' + event.id">
              <button
                @click="$router.push('/#reviews' + event.id).catch(() => {})"
                :disabled="event.reviews.length == 0"
                :class="{ 'disabled-button': event.reviews.length == 0 }"
                class="see-recensioner"
              >
                Se recensioner
              </button></a
            >
          </div>
        </div>
        <p
          class="description"
          :class="{ 'description-with-review': oldEvents }"
        >
          {{ event.description }}
        </p>
        <IndividualReview
          v-if="oldEvents && event.reviews.length != 0"
          v-bind:event="event"
        />
      </section>
    </div>
    <SetReview v-if="setReviewIsVisible" v-bind:event="event" />
  </div>
</template>

<script>
import IndividualReview from "@/components/IndividualReview.vue";
import Review from "@/components/Review.vue";
import SetReview from "@/components/SetReview.vue";
export default {
  components: {
    Review,
    IndividualReview,
    SetReview,
  },
  data: () => ({
    isDetailPage: true,
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
    loggedIn() {
      return this.$store.state.loggedIn;
    },
    joinEvent() {
      return this.event.participant.find((p) => p == this.loginUser.image);
    },
    loginUser() {
      return this.$store.state.loginUser;
    },
    setReviewIsVisible() {
      return this.$store.state.setReviewIsVisible;
    },
  },
  methods: {
    hideModal() {
      this.$router.push("/").catch(() => {});
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
    openSetReview() {
      this.$store.dispatch("openSetReview");
    },
    cancelEvent() {
      this.$store.dispatch("cancelEvent", this.event.id);
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
    position: fixed;
    top: 0;
    left: 0;
    background: $black;
    z-index: 999;
  }

  .event-detail-wrap {
    position: fixed;
    width: 900px;
    height: 75%;
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
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;

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
      flex-wrap: wrap;

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
        .date-time {
          display: flex;

          .time {
            margin-left: 8px;
          }
        }

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

          .cancel-button {
            min-width: 80px;
            font-size: 16px;
            line-height: 0;
            height: 40px;
            position: absolute;
            right: 24px;
            padding: 0 16px;
            background: $black;
          }

          .cancel-button:hover {
            color: $dark-gray;
            background: $white;
            border: 2px $dark-gray solid;
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
            right: 24px;
          }

          button:hover {
            border: 2px $pink solid;
          }

          .remove-button {
            background: $black;
          }

          .remove-button:hover {
            background: $white;
            color: $dark-gray;
            border: 2px $dark-gray solid;
          }
        }
      }
    }

    .detail {
      margin: 40px 0;

      .star-wrap {
        font-size: 40px;
      }

      p {
        line-height: 180%;
      }

      .review-button-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 68px;
        flex-wrap: wrap;

        button {
          min-width: 100px;
          font-size: 16px;
          margin: 0 8px;
          padding-left: 8px;
          padding-right: 8px;
        }

        // button:hover {
        //   border: solid $pink 2px;
        // }

        a {
          color: $white;
          text-decoration: none;
        }

        .see-recensioner {
          background: $yellow;
        }

        .see-recensioner:hover {
          background: $white;
          color: $yellow;
          // border: solid $yellow 2px;
        }

        .disabled-button {
          background: $light-gray;
          color: $white;
        }

        .disabled-button:hover {
          background: $light-gray;
          color: $white;
        }
      }
    }

    .detail-with-review {
      margin-top: 20px;
    }

    .description-with-review {
      margin-top: 24px;
    }
  }
}

@media (max-width: 600px) {
  #event-detail {
    .event-detail-wrap {
      width: 90%;
      max-height: 90%;
      overflow-y: scroll;
      overflow-x: hidden;

      .info-wrap {
        display: block;
        .image {
          margin-top: 30px;
          width: 100%;

          img {
            width: 100%;
          }
        }

        .info {
          .title {
            margin: 4px 0 4px;
          }
          .participant-total {
            margin-top: 16px;
          }
          .participant-wrap {
            button {
              margin: 60px auto 0;
              position: absolute;
              min-width: 50%;
            }
          }
        }
      }

      .detail {
        p {
          margin-top: 40px;
        }
      }
    }
  }

  .button-wrap {
    margin: 8px 0;
  }
}
</style>
