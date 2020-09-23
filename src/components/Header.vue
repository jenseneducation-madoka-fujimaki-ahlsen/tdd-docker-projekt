<template>
  <div id="header">
    <div
      class="overlay"
      v-if="loginFormIsVisible || registerFormIsVisible"
    ></div>
    <div class="header-wrap">
      <img
        @click="$router.push('/').catch(() => {})"
        class="logo"
        alt="logo"
        src="@/assets/logo.svg"
      />
      <div class="nav">
        <a v-on:click="showLoginForm" class="login-button" v-show="!loggedIn">
          Logga in
        </a>
        <a
          v-on:click="showRegisterForm"
          class="register-button"
          v-show="!loggedIn"
        >
          Bli medlem
        </a>
        <div class="afterLogin" v-if="loggedIn">
          <a v-on:click="logOut" class="log-out-button">
            Logga ut
          </a>
          <div class="userImage">
            <img :src="require(`@/assets/${loginUser.image}`)" alt="" />
          </div>
        </div>
      </div>
    </div>
    <Login v-if="loginFormIsVisible" />
    <Register v-if="registerFormIsVisible" />
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
    loginFormIsVisible() {
      return this.$store.state.loginFormIsVisible;
    },
    registerFormIsVisible() {
      return this.$store.state.registerFormIsVisible;
    },
    loggedIn() {
      return this.$store.state.loggedIn;
    },
    loginUser() {
      return this.$store.state.loginUser;
    },
  },
  methods: {
    showLoginForm() {
      this.$store.dispatch("showLoginForm");
    },
    showRegisterForm() {
      this.$store.dispatch("showRegisterForm");
    },
    hideModal() {
      this.$store.dispatch("hideModal");
    },
    logOut() {
      this.$store.dispatch("logOut");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#header {
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
  position: absolute;
  width: 100%;
  top: 0;

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

  .afterLogin {
    display: flex;
    align-items: center;
    margin-right: 16px;
    .userImage {
      width: 40px;
      height: 40px;
      overflow: hidden;
      border-radius: 50%;
      margin-right: -16px;

      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
      }
    }
  }
}
</style>
