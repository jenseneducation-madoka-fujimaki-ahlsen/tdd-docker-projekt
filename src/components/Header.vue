<template>
  <div id="header">
    <img
      @click="$router.push('/')"
      class="logo"
      alt="logo"
      src="@/assets/logo.svg"
    />
    <div class="nav">
      <router-link to="/">Logga in</router-link>
      <router-link to="/about">Bli medlem</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#header {
  height: 72px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(66, 66, 66);
  background: linear-gradient(
    90deg,
    rgba(66, 66, 66, 1) 0%,
    rgba(255, 100, 163, 1) 100%
  );
}

.logo {
  height: 56px;
  cursor: pointer;
}

.nav {
  a {
    color: $white;
    text-decoration: none;
    padding: 16px;
  }
  a:hover {
    color: $green;
  }
}
</style>
