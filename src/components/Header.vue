<template>
  <div id="header">
    <img class="logo" alt="logo" src="@/assets/logo.svg" />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#header {
  height: 64px;
  padding: 0 24px;
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
}
</style>
