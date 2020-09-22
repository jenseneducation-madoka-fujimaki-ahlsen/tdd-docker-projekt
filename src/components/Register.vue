<template>
  <div id="register">
    <div class="register-wrap">
      <a class="close-wrap">
        <img src="@/assets/close.svg" v-on:click="hideModal" alt="" />
      </a>
      <h2>Skapa ett konto</h2>
      <form>
        <input
          v-model="email"
          class="mail"
          type="email"
          placeholder="E-postadress"
          required="required"
          @keyup="checkForm()"
        />
        <input
          v-model="userName"
          class="username"
          type="text"
          placeholder="Användarnamn"
          required="required"
          @keyup="checkForm()"
        />
        <input
          v-model="password"
          class="password"
          type="password"
          placeholder="Lösenord"
          required="required"
          @keyup="checkForm()"
          minlength="5"
        />
        <p class="form-text">
          innehåller minst 5 tecken
        </p>

        <button
          type="button"
          @click="register"
          :disabled="!valid"
          :class="{ 'not-valid': !valid }"
        >
          Skapa konto
        </button>
      </form>
      <div class="new-account">
        <p>Har du redan ett konto?</p>
        <a v-on:click="showLoginForm">Logga in</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    userName: "",
    password: "",
    valid: false,
  }),
  computed: {
    people() {
      return this.$store.state.people;
    },
  },
  methods: {
    showLoginForm() {
      this.$store.dispatch("showLoginForm");
    },
    hideModal() {
      this.$store.dispatch("hideModal");
    },
    checkForm() {
      if (
        this.userName !== "" &&
        this.validPassword(this.password) &&
        this.validEmail(this.email)
      ) {
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
    register() {
      let newUser = {
        id: this.people.length,
        name: this.userName,
        email: this.email,
        password: this.password,
        image: "0.jpg",
        participate: [],
        participated: [],
      };
      this.$store.dispatch("register", newUser);
    },
    validPassword: function(password) {
      if (password.length >= 5) {
        return true;
      } else {
        return false;
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.register-wrap {
  background: $white;
  width: 500px;
  height: 600px;
  position: fixed;
  // top: 80px;
  // right: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;

  .close-wrap {
    width: 40px;
    align-self: flex-end;
    margin: 16px 16px 0 auto;
    cursor: pointer;
  }

  h2 {
    color: $dark-gray;
    font-size: 2rem;
    margin: 24px 0 48px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      height: 40px;
      width: 100%;
      margin: 8px 0;
      padding: 0 8px;
      border: none;
      border-bottom: 1px solid $dark-gray;
      font-size: 16px;
    }

    .form-text {
      color: $light-gray;
      margin: 0 auto 0 0;
    }

    button {
      margin-top: 32px;
    }

    button:hover {
      border: 2px solid $pink;
    }

    .not-valid {
      background: $light-gray;
    }
    .not-valid:hover {
      border: none;
      color: $white;
    }
  }

  .new-account {
    display: flex;
    margin-top: 32px;
    align-items: center;

    p {
      color: $dark-gray;
      margin: 0 4px;
    }

    a {
      color: $pink;
      margin: 0 4px;
      cursor: pointer;
    }
  }
}
</style>
