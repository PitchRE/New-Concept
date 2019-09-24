<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <FooterObject></FooterObject>
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
import FooterObject from "./components/footer";

export default {
  name: "app",
  components: {
    Navbar,
    FooterObject
  }
};
</script>

<style>
</style>
