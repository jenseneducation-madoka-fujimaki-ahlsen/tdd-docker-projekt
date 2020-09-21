<template>
  <div id="header">
    <div
      class="overlay"
      v-if="loginIsVisible || registerIsVisible"
      v-on:click="hideForm"
    ></div>
    <div class="header-wrap">
      <img
        @click="$router.push('/')"
        class="logo"
        alt="logo"
        src="@/assets/logo.svg"
      />
      <div class="nav">
        <a v-on:click="showLoginForm" class="login-button">
          Logga in
        </a>
        <a v-on:click="showRegisterForm" class="register-button">
          Bli medlem
        </a>
      </div>
    </div>
    <Login v-if="loginIsVisible" />
    <Register v-if="registerIsVisible" />
  </div>
</template>

<script>
import Login from "@/components/Login";
import Register from "@/components/Register";

export default {
  components: {
    Login,
    Register,
  },
  data: () => ({}),
  computed: {
    loginIsVisible() {
      return this.$store.state.loginIsVisible;
    },
    registerIsVisible() {
      return this.$store.state.registerIsVisible;
    },
  },
  methods: {
    showLoginForm() {
      this.$store.dispatch("showLoginForm");
    },
    showRegisterForm() {
      this.$store.dispatch("showRegisterForm");
    },
    hideForm() {
      this.$store.dispatch("hideForm");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#header {
  height: 100%;
}

.overlay {
  width: 100%;
  height: 100%;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  background: $black;
  z-index: 999;
}

.header-wrap {
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
    cursor: pointer;
  }
  a:hover {
    color: $green;
  }
}
</style>
