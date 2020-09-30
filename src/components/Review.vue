<template>
  <div id="review">
    <!-- <span class="heading">User Rating</span> -->
    <div class="star-wrap" :class="{ 'is-detail-page': isDetailPage }">
      <p class="average-review">{{ averageReview }}</p>
      <div class="stars">
        <span class="fa fa-star" :class="{ checked: star1 }"></span>
        <span class="fa fa-star" :class="{ checked: star2 }"></span>
        <span class="fa fa-star" :class="{ checked: star3 }"></span>
        <span class="fa fa-star" :class="{ checked: star4 }"></span>
        <span class="fa fa-star" :class="{ checked: star5 }"></span>
      </div>
      <p
        v-if="!isDetailPage && individualReview == undefined"
        class="length-big"
      >
        ({{ event.reviews.length }})
      </p>
      <p
        v-if="isDetailPage && individualReview == undefined"
        class="length-small"
      >
        {{ event.reviews.length }} recensioner
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["event", "isDetailPage", "individualReview"],
  data: () => ({
    star1: false,
    star2: false,
    star3: false,
    star4: false,
    star5: false,
  }),
  computed: {
    averageReview() {
      let total = 0;
      if (this.individualReview != undefined) {
        return this.individualReview;
      } else if (this.event.reviews.length !== 0) {
        this.event.reviews.forEach((r) => {
          total += r.review;
        });
        let average = Math.floor((total / this.event.reviews.length) * 10) / 10;
        return average;
      } else {
        return "";
      }
    },
  },
  watch: {
    averageReview(newValue) {
      if (newValue == 0) {
        this.star1 = false;
        this.star2 = false;
        this.star3 = false;
        this.star4 = false;
        this.star5 = false;
      } else if (newValue >= 0.5 && newValue < 1.5) {
        this.star1 = true;
        this.star2 = false;
        this.star3 = false;
        this.star4 = false;
        this.star5 = false;
      } else if (newValue >= 1.5 && newValue < 2.5) {
        this.star1 = true;
        this.star2 = true;
        this.star3 = false;
        this.star4 = false;
        this.star5 = false;
      } else if (newValue >= 2.5 && newValue < 3.5) {
        this.star1 = true;
        this.star2 = true;
        this.star3 = true;
        this.star4 = false;
        this.star5 = false;
      } else if (newValue >= 3.5 && newValue < 4.5) {
        this.star1 = true;
        this.star2 = true;
        this.star3 = true;
        this.star4 = true;
        this.star5 = false;
      } else if (newValue >= 4.5) {
        this.star1 = true;
        this.star2 = true;
        this.star3 = true;
        this.star4 = true;
        this.star5 = true;
      } else {
        this.star1 = false;
        this.star2 = false;
        this.star3 = false;
        this.star4 = false;
        this.star5 = false;
      }
    },
    individualReview: function(newValue) {
      if (newValue == 0) {
        this.star1 = false;
        this.star2 = false;
        this.star3 = false;
        this.star4 = false;
        this.star5 = false;
      } else if (newValue >= 0.5 && newValue < 1.5) {
        this.star1 = true;
        this.star2 = false;
        this.star3 = false;
        this.star4 = false;
        this.star5 = false;
      } else if (newValue >= 1.5 && newValue < 2.5) {
        this.star1 = true;
        this.star2 = true;
        this.star3 = false;
        this.star4 = false;
        this.star5 = false;
      } else if (newValue >= 2.5 && newValue < 3.5) {
        this.star1 = true;
        this.star2 = true;
        this.star3 = true;
        this.star4 = false;
        this.star5 = false;
      } else if (newValue >= 3.5 && newValue < 4.5) {
        this.star1 = true;
        this.star2 = true;
        this.star3 = true;
        this.star4 = true;
        this.star5 = false;
      } else if (newValue >= 4.5) {
        this.star1 = true;
        this.star2 = true;
        this.star3 = true;
        this.star4 = true;
        this.star5 = true;
      } else {
        this.star1 = false;
        this.star2 = false;
        this.star3 = false;
        this.star4 = false;
        this.star5 = false;
      }
    },
  },

  mounted() {
    if (this.individualReview == undefined) {
      if (this.averageReview > 0.5 && this.averageReview < 1.5) {
        this.star1 = true;
      } else if (this.averageReview >= 1.5 && this.averageReview < 2.5) {
        this.star1 = true;
        this.star2 = true;
      } else if (this.averageReview >= 2.5 && this.averageReview < 3.5) {
        this.star1 = true;
        this.star2 = true;
        this.star3 = true;
      } else if (this.averageReview >= 3.5 && this.averageReview < 4.5) {
        this.star1 = true;
        this.star2 = true;
        this.star3 = true;
        this.star4 = true;
      } else if (this.averageReview >= 4.5) {
        this.star1 = true;
        this.star2 = true;
        this.star3 = true;
        this.star4 = true;
        this.star5 = true;
      } else {
        this.star1 = false;
        this.star2 = false;
        this.star3 = false;
        this.star4 = false;
        this.star5 = false;
      }
    } else {
      if (this.individualReview >= 0.5 && this.individualReview < 1.5) {
        this.star1 = true;
      } else if (this.individualReview >= 1.5 && this.individualReview < 2.5) {
        this.star1 = true;
        this.star2 = true;
      } else if (this.individualReview >= 2.5 && this.individualReview < 3.5) {
        this.star1 = true;
        this.star2 = true;
        this.star3 = true;
      } else if (this.individualReview >= 3.5 && this.individualReview < 4.5) {
        this.star1 = true;
        this.star2 = true;
        this.star3 = true;
        this.star4 = true;
      } else if (this.individualReview >= 4.5) {
        this.star1 = true;
        this.star2 = true;
        this.star3 = true;
        this.star4 = true;
        this.star5 = true;
      } else {
        this.star1 = false;
        this.star2 = false;
        this.star3 = false;
        this.star4 = false;
        this.star5 = false;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

#review {
  .star-wrap {
    display: flex;
    align-items: center;
    font-size: 20px;

    .average-review {
      margin-right: 8px;
    }
  }

  .is-detail-page {
    font-size: 32px;
  }

  .length-big {
    margin-left: 8px;
  }

  .length-small {
    font-size: 20px;
    margin-top: 4px;
    margin-left: 16px;
    color: $dark-gray3;
  }

  .heading {
    color: $white;
    margin-right: 25px;
  }

  .checked {
    color: $yellow;
  }
}

@media (max-width: 600px) {
  #review {
    .is-detail-page {
      font-size: 20px;
    }

    .length-small {
      font-size: 16px;
    }
  }
}
</style>
