<template>
  <div id="set-review">
    <div class="overlay" v-on:click="hideSetReview"></div>
    <div class="set-review-wrap">
      <a class="close-wrap">
        <img src="@/assets/close.svg" v-on:click="hideSetReview" alt="" />
      </a>
      <div class="user-detail">
        <div class="user-image">
          <img :src="require(`@/assets/${loginUser.image}`)" />
        </div>
        <p class="user-name">{{ loginUser.name }}</p>
      </div>

      <div class="star-wrap">
        <div class="stars">
          <span
            class="fa fa-star"
            :class="{ checked: star1 }"
            @click="setStar(1)"
          ></span>
          <span
            class="fa fa-star"
            :class="{ checked: star2 }"
            @click="setStar(2)"
          ></span>
          <span
            class="fa fa-star"
            :class="{ checked: star3 }"
            @click="setStar(3)"
          ></span>
          <span
            class="fa fa-star"
            :class="{ checked: star4 }"
            @click="setStar(4)"
          ></span>
          <span
            class="fa fa-star"
            :class="{ checked: star5 }"
            @click="setStar(5)"
          ></span>
        </div>
      </div>
      <textarea
        name=""
        id=""
        cols="60"
        rows="10"
        placeholder="Your impressions at this event"
        v-model="comment"
      ></textarea>
      <button v-if="!changeButton" @click="postReview">Posta</button>
      <div class="button-wrap">
        <button class="update" v-if="changeButton" @click="postReview">
          Uppdatera
        </button>
        <button v-if="changeButton" @click="removeReview" class="remove-button">
          Ta bort
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["event"],
  data: () => ({
    star1: false,
    star2: false,
    star3: false,
    star4: false,
    star5: false,
    totalStar: 0,
    comment: "",
    changeButton: false,
  }),
  computed: {
    loginUser() {
      return this.$store.state.loginUser;
    },
  },
  watch: {
    "event.reviews": function(val) {
      if (val.filter((r) => r.person == this.loginUser.image).length !== 0) {
        this.totalStar = val.filter(
          (r) => r.person == this.loginUser.image
        )[0].review;
        this.comment = val.filter(
          (r) => r.person == this.loginUser.image
        )[0].comment;
        this.changeButton = true;
      } else {
        this.totalStar = 0;
        this.changeButton = false;
        this.star1 = false;
        this.star2 = false;
        this.star3 = false;
        this.star4 = false;
        this.star5 = false;
      }
    },
  },
  mounted() {
    if (
      this.event.reviews.filter((r) => r.person == this.loginUser.image)
        .length !== 0
    ) {
      this.totalStar = this.event.reviews.filter(
        (r) => r.person == this.loginUser.image
      )[0].review;
      this.comment = this.event.reviews.filter(
        (r) => r.person == this.loginUser.image
      )[0].comment;
      this.setStar(this.totalStar);
      this.changeButton = true;
    }
  },
  methods: {
    hideSetReview() {
      this.$store.dispatch("hideSetReview");
    },
    async postReview() {
      let userReview = {
        event: this.event,
        star: this.totalStar,
        comment: this.comment,
        update: this.changeButton,
      };
      await this.$store.dispatch("postReview", userReview);
    },
    async removeReview() {
      this.comment = "";
      await this.$store.dispatch("removeReview", this.event);
    },
    setStar(num) {
      if (num == 1) {
        if (this.star1 && this.star2 == true) {
          this.star2 = false;
          this.star3 = false;
          this.star4 = false;
          this.star5 = false;
          this.totalStar = 1;
        } else if (this.star1 == true) {
          this.star1 = false;
          this.totalStar = 0;
        } else {
          this.star1 = true;
          this.star2 = false;
          this.star3 = false;
          this.star4 = false;
          this.star5 = false;
          this.totalStar = 1;
        }
      } else if (num == 2) {
        if (this.star2 && this.star3 == true) {
          this.star3 = false;
          this.star4 = false;
          this.star5 = false;
          this.totalStar = 2;
        } else if (this.star2 == true) {
          this.star2 = false;
          this.totalStar = 1;
        } else {
          this.star1 = true;
          this.star2 = true;
          this.star3 = false;
          this.star4 = false;
          this.star5 = false;
          this.totalStar = 2;
        }
      } else if (num == 3) {
        if (this.star3 && this.star4 == true) {
          this.star4 = false;
          this.star5 = false;
          this.totalStar = 3;
        } else if (this.star3 == true) {
          this.star3 = false;
          this.totalStar = 2;
        } else {
          this.star1 = true;
          this.star2 = true;
          this.star3 = true;
          this.star4 = false;
          this.star5 = false;
          this.totalStar = 3;
        }
      } else if (num == 4) {
        if (this.star4 && this.star5 == true) {
          this.star5 = false;
          this.totalStar = 4;
        } else if (this.star4 == true) {
          this.star4 = false;
          this.totalStar = 3;
        } else {
          this.star1 = true;
          this.star2 = true;
          this.star3 = true;
          this.star4 = true;
          this.star5 = false;
          this.totalStar = 4;
        }
      } else if (num == 5) {
        if (this.star5 == true) {
          this.star5 = false;
          this.totalStar = 4;
        } else {
          this.star1 = true;
          this.star2 = true;
          this.star3 = true;
          this.star4 = true;
          this.star5 = true;
          this.totalStar = 5;
        }
      } else if (num == 0) {
        this.star1 = false;
        this.star2 = false;
        this.star3 = false;
        this.star4 = false;
        this.star5 = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#set-review {
  .overlay {
    width: 100%;
    height: 100%;
    opacity: 0.05;
    position: fixed;
    top: 0;
    left: 0;
    background: $black;
    z-index: 999;
  }

  .set-review-wrap {
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

    .user-detail {
      display: flex;
      align-items: center;
      margin: 40px 0;

      .user-image {
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 16px;
        img {
          width: 40px;
          height: 40px;
          object-fit: cover;
        }
      }

      .user-name {
        font-size: 20px;
      }
    }

    .stars {
      span {
        font-size: 40px;
        margin: 0 8px;
        color: $light-gray;
        cursor: pointer;
      }

      .checked {
        color: $yellow;
      }
    }

    textarea {
      margin: 20px 0 30px;
      padding-top: 16px;
      padding-left: 16px;
    }

    .button-wrap {
      display: flex;

      button {
        min-width: 24px;
        margin: 0 8px;
        padding: 0 20px;
      }

      .remove-button {
        background: $dark-gray;
      }

      .remove-button:hover {
        background: $white;
        color: $dark-gray;
      }
    }
  }
}

@media (max-width: 600px) {
  #set-review {
    .set-review-wrap {
      width: 90%;
      max-height: 90%;
      overflow-y: scroll;
      overflow-x: hidden;

      textarea {
        width: 90%;
      }
    }
  }
}
</style>
