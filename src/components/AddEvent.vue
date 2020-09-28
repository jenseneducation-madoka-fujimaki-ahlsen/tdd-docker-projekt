<template>
  <div id="add-event">
    <div class="eventForm-wrap">
      <a class="close-wrap">
        <img src="@/assets/close.svg" v-on:click="hideModal" alt="" />
      </a>
      <h2>Skapa ett nytt evenemang</h2>
      <form>
        <input
          v-model="title"
          class="Title"
          placeholder="Titel"
          required="required"
          @keyup="checkForm()"
        />
        <textarea
          v-model="description"
          class="description"
          placeholder="Beskrivning"
          required="required"
          @keyup="checkForm()"
        />
        <input
          v-model="place"
          class="place"
          placeholder="Plats"
          required="required"
          @keyup="checkForm()"
        />
        <input
          v-model="date"
          type="date"
          class="date"
          placeholder="Datum"
          required="required"
          @click="checkForm()"
        />

        <input
          type="file"
          id="selectedFile"
          style="display: none;"
          @change="onFileChange"
        />
        <input
          class="file-button"
          type="button"
          :value="fileName"
          onclick="document.getElementById('selectedFile').click();"
        />

        <button
          type="button"
          @click="addEvent"
          :disabled="!valid"
          :class="{
            'not-valid':
              !valid || fileName == 'Ladda upp en bild' || date == '',
          }"
        >
          Skapa evenemang
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "",
    description: "",
    place: "",
    date: "",
    fileName: "Ladda upp en bild",
    valid: false,
  }),
  computed: {
    loginUser() {
      return this.$store.state.loginUser;
    },
    events() {
      return this.$store.state.events;
    },
  },
  methods: {
    onFileChange(event) {
      var fileData = event.target.files[0];
      this.fileName = fileData.name;
    },
    hideModal() {
      this.$store.dispatch("hideModal");
    },

    checkForm() {
      if (this.title !== "" && this.description !== "" && this.place !== "") {
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
    addEvent() {
      let newEvent = {
        id: this.events[this.events.length - 1].id + 1,
        title: this.title,
        description: this.description,
        place: this.place,
        date: this.date,
        image: this.fileName,
        host: this.loginUser.image,
        participant: [this.loginUser.image],
        reviews: [],
      };
      this.$store.dispatch("addEvent", newEvent);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.eventForm-wrap {
  background: $white;
  width: 800px;
  height: 650px;
  position: fixed;
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
    margin: 20px 0 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;

    input {
      height: 40px;
      width: 100%;
      margin: 8px 0;
      padding: 0 8px;
      border: none;
      border-bottom: 1px solid $dark-gray;
      font-size: 16px;
    }

    textarea {
      height: 80px;
      width: 100%;
      margin-top: 8px;
      padding: 8px;
    }

    button {
      margin-top: 32px;
    }

    button:hover {
      border: 2px solid $pink;
    }

    .file-button {
      cursor: pointer;
    }

    .not-valid {
      background: $light-gray;
    }
    .not-valid:hover {
      border: none;
      color: $white;
    }
  }
}

@media (max-width: 600px) {
  .eventForm-wrap {
    width: 90%;
  }
}
</style>
