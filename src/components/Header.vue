<template>
  <div id="header">
    <div
      class="overlay"
      v-if="loginFormIsVisible || registerFormIsVisible || eventFormIsVisible"
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
          <button class="event-form-button" v-on:click="showEventForm">
            Lägga till evenemang
          </button>
          <a v-on:click="logOut" class="log-out-button">
            Logga ut
          </a>
          <div class="userImage">
            <img :src="require(`@/assets/${loginUser.image}`)" alt="" />
          </div>
        </div>
      </div>
    </div>
    <AddEvent v-if="eventFormIsVisible" />
    <Login v-if="loginFormIsVisible" />
    <Register v-if="registerFormIsVisible" />
  </div>
</template>

<script>
import Login from "@/components/Login";
import Register from "@/components/Register";
import AddEvent from "@/components/AddEvent";

export default {
  components: {
    Login,
    Register,
    AddEvent,
  },
  data: () => ({}),
  computed: {
    loginFormIsVisible() {
      return this.$store.state.loginFormIsVisible;
    },
    registerFormIsVisible() {
      return this.$store.state.registerFormIsVisible;
    },
    eventFormIsVisible() {
      return this.$store.state.eventFormIsVisible;
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
    showEventForm() {
      this.$store.dispatch("showEventForm");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#header {
  position: absolute;
  width: 100%;
  top: 0;
}

.overlay {
  width: 100%;
  height: 100%;
  opacity: 0.7;
  position: fixed;
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

    .event-form-button {
      font-size: 16px;
      min-width: 20px;
      padding: 0 16px;
      margin-right: 16px;
      border: 1px solid $white;
      border-radius: 50px;
      background: none;
    }

    .event-form-button:hover {
      background: $white;
      color: $pink;
    }
  }
}

@media (max-width: 600px) {
  .header-wrap {
    padding: 0 16px;
  }

  .logo {
    height: 38px;
  }

  .nav {
    a {
      padding: 8px;
      font-size: 14px;
    }
    .afterLogin {
      .event-form-button {
        font-size: 14px;
        padding: 0;
        margin-right: 0;
        border: none;
        border-radius: 50px;
        background: none;
        line-height: 16px;
      }

      .event-form-button:hover {
        background: none;
        color: $white;
      }
    }
  }
}
</style>
