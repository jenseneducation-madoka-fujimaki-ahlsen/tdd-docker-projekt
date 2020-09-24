<template>
  <div id="individual-review">
    <h2 v-bind:id="'review' + event.id">Recensioner</h2>
    <div
      class="individual-review-wrap"
      v-for="review in event.reviews"
      :key="review.person"
    >
      <div class="participant-wrap">
        <div class="participant">
          <img :src="require(`@/assets/${review.person}`)" />
        </div>
        <Review class="review" v-bind:individualReview="review.review" />
      </div>
      <p id="1">{{ review.comment }}</p>
    </div>
  </div>
</template>

<script>
import Review from "@/components/Review.vue";
export default {
  components: {
    Review,
  },
  props: ["event", "oldEvents"],
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
#individual-review {
  width: 100%;
  margin-top: 40px;
  z-index: 999;

  h2 {
    margin-bottom: 20px;
  }

  .individual-review-wrap {
    width: 100%;
    align-items: center;
    border-bottom: 1px solid $light-gray;
    margin: 16px 0;
  }
  .participant-wrap {
    margin: 16px 0;
    display: flex;
    align-items: center;

    .participant {
      width: 40px;
      height: 40px;
      overflow: hidden;
      border-radius: 50%;
      margin-right: -16px;
      position: relative;
      margin-right: 20px;

      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
      }
    }
  }

  p {
    margin-bottom: 16px;
  }
}
</style>
