<template>
  <div id="register">
    <div class="register-wrap">
      <a class="close-wrap">
        <img src="@/assets/close.svg" v-on:click="hideForm" alt="" />
      </a>
      <h2>Skapa ett konto</h2>
      <form>
        <input
          class="mail"
          type="email"
          placeholder="E-postadress"
          required="required"
        />
        <input
          class="username"
          type="text"
          placeholder="Användarnamn"
          required="required"
        />
        <input
          class="password"
          type="password"
          placeholder="Lösenord"
          required="required"
        />
        <button type="submit">
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
  methods: {
    showLoginForm() {
      this.$store.dispatch("showLoginForm");
    },
    hideForm() {
      this.$store.dispatch("hideForm");
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
  top: 80px;
  right: 80px;
  border-radius: 10px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;

  .close-wrap {
    width: 40px;
    align-self: flex-end;
    margin: 16px 16px 0 auto;
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

    button {
      margin-top: 32px;
    }

    button:hover {
      border: 2px solid $pink;
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
