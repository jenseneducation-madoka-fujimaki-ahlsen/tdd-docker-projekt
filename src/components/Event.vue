<template>
  <div id="event">
    <img :src="require(`@/assets/${event.image}`)" alt="" />
    <p class="date">{{ event.date }}</p>
    <p class="title">{{ event.title }}</p>
    <div class="place">
      <img src="@/assets/location.svg" alt="" />
      <p>{{ event.place }}</p>
    </div>

    <p class="participant">
      deltagare: {{ event.participant.length }} personer
    </p>
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
}

img {
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
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

.place {
  display: flex;
  align-items: center;

  img {
    width: 13px;
    height: 19px;
    margin-right: 8px;
  }
}
</style>
