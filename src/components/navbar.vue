<template>
  <div style="margin-right" class="uk-margin-large-right">
    <vk-navbar class="navbar">
      <vk-navbar-logo>
        <router-link to="/">
          <img id="logo" src="https://stolarniegalicyjskie.pl/images/logo.png" />
        </router-link>
      </vk-navbar-logo>

      <vk-navbar-nav slot="right">
        <vk-navbar-nav-item id="start" @click="defaultRedirect" title="Home"></vk-navbar-nav-item>
        <vk-navbar-nav-item @click="portfolioRedirect" title="Portfolio"></vk-navbar-nav-item>
        <vk-navbar-nav-item @click="visualisationsRedirect" title="Wizualizacje"></vk-navbar-nav-item>
        <vk-navbar-nav-item @click="contactRedirect" title="Kontakt"></vk-navbar-nav-item>
      </vk-navbar-nav>
    </vk-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    contactRedirect: function() {
      if (this.$router.currentRoute.name == "Kontakt") return;
      this.$router.push({ path: "/Kontakt" });
    },
    visualisationsRedirect: function() {
      if (this.$router.currentRoute.name == "Wizualizacje") return;
      this.$router.push({ path: "/Wizualizacje" });
    },
    portfolioRedirect: function() {
      if (this.$router.currentRoute.name == "Portfolio") return;
      this.$router.push({ path: "/Portfolio" });
    },
    defaultRedirect: function() {
      if (this.$router.currentRoute.name == "Home") return;
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: rgba(255, 255, 255, 0.658) !important;
}

@media only screen and (min-width: 767px) {
  #start {
    display: none;
  }
}

@media only screen and (max-width: 767px) {
  #logo {
    display: none;
  }
}
</style>

