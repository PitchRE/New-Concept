<template>
  <div style="margin-right" class="uk-margin-large-right"> 



    <vk-navbar class="navbar">
      <vk-navbar-logo>
        <img src="https://stolarniegalicyjskie.pl/images/logo.png" />
      </vk-navbar-logo>
    
      <vk-navbar-nav slot="right" >

     
        <vk-navbar-nav-item title="Start" active></vk-navbar-nav-item>
        
        <vk-navbar-nav-dropdown title="Portfolio">
          <vk-navbar-nav-dropdown-nav>
            <vk-nav-item title="Kuchnie"></vk-nav-item>
            <vk-nav-item title="Meble"></vk-nav-item>
            <vk-nav-item title="Sofy"></vk-nav-item>
          </vk-navbar-nav-dropdown-nav>
        </vk-navbar-nav-dropdown>
        <vk-navbar-nav-item title="Kontakt"></vk-navbar-nav-item>
      </vk-navbar-nav>
 
           
    </vk-navbar>
   
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background-color: rgba(255, 255, 255, 0.658) !important;
}

</style>