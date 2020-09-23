<template>
  <div id="footer">
    <img
      @click="$router.push('/').catch(() => {})"
      class="logo"
      alt="logo"
      src="@/assets/logo.svg"
    />
    <nav>
      <router-link
        class="nav"
        v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`"
        >{{ routes.text }}</router-link
      >
    </nav>
    <p>© 2020 meetapp</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        id: 0,
        text: "Top",
        page: "/",
      },
      {
        id: 1,
        text: "Om oss",
        page: "/about",
      },
      {
        id: 2,
        text: "Kontakt",
        page: "/contact",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgb(66, 66, 66);
  background: linear-gradient(
    90deg,
    rgba(66, 66, 66, 1) 0%,
    rgba(255, 100, 163, 1) 100%
  );

  img {
    height: 48px;
    margin: 0 16px 16px;
    cursor: pointer;
  }

  p {
    color: $black;
    font-size: 0.8rem;
  }

  nav {
    display: flex;
    justify-content: center;
    a {
      margin: 0 20px 24px;
      text-decoration: none;
      color: $white;
      font-size: 1rem;

      &:hover {
        color: $green;
      }
    }
  }
}
</style>
