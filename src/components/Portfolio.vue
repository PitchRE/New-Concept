<template>
  <div>
    <div class="uk-container">
      <vk-tabs align="center" class="uk-margin-large-top">
        <vk-tabs-item title="Kuchnie">
          <!-- galery start kuchnie -->

          <gallery :images="kuchnie" :index="index" @close="index = null"></gallery>
          <div
            class="image"
            v-for="(image, imageIndex) in kuchnie"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
          ></div>

          <!-- galery end kuchnie -->
        </vk-tabs-item>
        <vk-tabs-item title="Pokoje"></vk-tabs-item>
        <vk-tabs-item title="Łazienki"></vk-tabs-item>
        <vk-tabs-item title="Inne"></vk-tabs-item>
      </vk-tabs>
    </div>
  </div>
</template>
 
<script>
import VueGallery from "vue-gallery";

export default {
  data: function() {
    return {
      kuchnie: [
        "/img/IMG_20190131_144343.0340a187.jpg",
        "/img/received_1027644213992520.490ccf0c.jpeg",
        "/img/received_1027644290659179.21ba6a8e.jpeg",
        "/img/20161119_115925.0ed1a804.jpg",
        "/img/20161119_115925.0ed1a804.jpg"
      ],
      index: null
    };
  },

  components: {
    gallery: VueGallery
  }
};
</script> 
 
<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style> 
 