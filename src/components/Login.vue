<template>
  <div id="login">
    <div class="login-wrap">
      <h2>Logga in</h2>
      <form>
        <input
          class="username"
          type="text"
          placeholder="Användarnamn"
          required="required"
        />
        <input
          class="password"
          type="password"
          placeholder="Password"
          required="required"
        />
        <button type="submit">
          Logga in
        </button>
      </form>
      <div class="new-account">
        <p>Ny användare?</p>
        <a v-on:click="showRegisterForm">Skapa ett konto?</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showRegisterForm() {
      this.$store.dispatch("showRegisterForm");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.login-wrap {
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

  h2 {
    color: $dark-gray;
    font-size: 2rem;
    margin: 48px 0;
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
      border-bottom: 2px solid $dark-gray;
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
