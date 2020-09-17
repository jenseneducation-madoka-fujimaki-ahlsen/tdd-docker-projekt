<template>
  <div id="event">
    <img src="" alt="" />
    <p>{{ event.title }}</p>
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
  border: solid 1px $pink;
  width: 280px;
  height: 360px;
  margin: 0 auto;
  text-align: center;
  margin: 16px;
  padding: 8px;
}
</style>
