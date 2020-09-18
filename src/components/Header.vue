<template>
  <div id="header">
    <div class="header-wrap">
      <img
        @click="$router.push('/')"
        class="logo"
        alt="logo"
        src="@/assets/logo.svg"
      />
      <div class="nav">
        <button v-on:click="showLoginForm" class="login-button">
          Logga in
        </button>
        <button v-on:click="showRegisterForm" class="register-button">
          Bli medlem
        </button>
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
  data: () => ({
    loginIsVisible: false,
    registerIsVisible: false,
  }),
  methods: {
    showLoginForm() {
      this.registerIsVisible = false;
      this.loginIsVisible = true;
    },
    showRegisterForm() {
      this.registerIsVisible = true;
      this.loginIsVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

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
  }
  a:hover {
    color: $green;
  }
}
</style>
