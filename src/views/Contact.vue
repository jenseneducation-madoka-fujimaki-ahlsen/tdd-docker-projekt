<template>
  <div id="contact">
    <Header />
    <div class="contact_main">
      <h2>Kontakta oss</h2>
      <div class="contact">
        <div class="mail">
          <span>E-post:</span>
          <a href="mailto:mailus@meetapp.com">mailus@meetapp.com</a>
        </div>
        <div class="call">
          <span>Telefon:</span>
          <a>072xxxxxxx</a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

#contact {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact_main {
  margin: 12rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .contact {
    margin-bottom: 5rem;
    margin-top: 8px;

    span {
      margin-right: 1rem;
    }

    span,
    a {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    div {
      display: flex;
      align-items: center;

      img {
        height: 24px;
        width: 24px;
      }
    }
    .call {
      span {
        margin-right: 1rem;
      }
    }

    .mail {
      span {
        margin-right: 1.5rem;
      }
      a {
        color: $light-gray;
      }
    }
  }
}

@media (max-width: 600px) {
  .contact_main {
    margin: 12rem 8px;

    .contact {
      span {
        font-size: 1rem;
      }

      a {
        font-size: 1rem;
      }
    }
  }
}
</style>
