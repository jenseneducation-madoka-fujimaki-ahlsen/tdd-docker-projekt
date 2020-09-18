<template>
  <div id="event">
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
      <button class="join-button">
        Delta
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
#event {
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

    button {
      min-width: 80px;
      font-size: 16px;
      line-height: 0;
      height: 40px;
    }
  }
}

#event:hover {
  // transform: translatey(-10px);
  // box-shadow: 1px 1px 24px #000000;

  .image {
    img {
      transform: scale(1.2);
      transition-timing-function: ease-out;
      transition-duration: 0.3s;
    }
  }
}
</style>
