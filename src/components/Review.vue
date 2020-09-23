<template>
  <div id="review">
    <!-- <span class="heading">User Rating</span> -->
    <div class="star-wrap">
      <p>{{ averageReview }}</p>
      <div class="stars">
        <span class="fa fa-star" :class="{ checked: star1 }"></span>
        <span class="fa fa-star" :class="{ checked: star2 }"></span>
        <span class="fa fa-star" :class="{ checked: star3 }"></span>
        <span class="fa fa-star" :class="{ checked: star4 }"></span>
        <span class="fa fa-star" :class="{ checked: star5 }"></span>
      </div>
      <p>({{ event.reviews.length }})</p>
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
  }),
  computed: {
    averageReview() {
      let total = 0;
      if (this.event.reviews.length !== 0) {
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

  mounted() {
    if (this.averageReview > 0.5 && this.averageReview < 1.5) {
      this.star1 = true;
    } else if (this.averageReview > 1.5 && this.averageReview < 2.5) {
      this.star1 = true;
      this.star2 = true;
    } else if (this.averageReview > 2.5 && this.averageReview < 3.5) {
      this.star1 = true;
      this.star2 = true;
      this.star3 = true;
    } else if (this.averageReview > 3.5 && this.averageReview < 4.5) {
      this.star1 = true;
      this.star2 = true;
      this.star3 = true;
      this.star4 = true;
    } else if (this.averageReview > 4.5) {
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
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

#review {
  .star-wrap {
    display: flex;
    align-items: center;
    font-size: 14px;

    p {
      margin: 0 4px;
    }
  }

  .heading {
    color: $white;
    margin-right: 25px;
  }

  .checked {
    color: $yellow;
  }
}
</style>
