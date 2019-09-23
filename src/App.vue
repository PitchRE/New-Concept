<template>
  <div id="app">
   <navbar></navbar>
    <default/>
    <FooterObject></FooterObject>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import Default from './components/Default.vue'
import FooterObject from './components/footer'


export default {
  name: 'app',
  components: {
    Default,
    Navbar,
    FooterObject
  
  }
}
</script>

<style>

</style>
