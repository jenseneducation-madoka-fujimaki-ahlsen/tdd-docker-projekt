<template>
  <div id="footer">
    <img
      @click="$router.push('/')"
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
        text: "Om oss",
        page: "/about",
      },
      {
        id: 1,
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
    color: $light-gray2;
  }

  nav {
    display: flex;
    justify-content: center;
    a {
      margin: 0 20px 24px;
      text-decoration: none;
      color: $white;
      font-size: 1.5rem;

      &:hover {
        color: $green;
      }
    }
  }
}
</style>
