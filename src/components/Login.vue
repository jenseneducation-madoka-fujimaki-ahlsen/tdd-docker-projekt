<template>
  <div id="login">
    <div class="login-wrap"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.login-wrap {
  background: $white;
  width: 500px;
  height: 600px;
  position: fixed;
  top: 80px;
  right: 80px;
  border-radius: 10px;
  z-index: 999;
}
</style>
