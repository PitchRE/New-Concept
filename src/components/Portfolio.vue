<template>
  <div>
    <div class="uk-container">
      <vk-tabs align="center" class="uk-margin-large-top">
        <vk-tabs-item title="Kuchnie">
          <gallery :images="kuchnie" :index="index" @close="index = null"></gallery>
          <div
            data-aos="zoom-in-up"
            class="image"
            v-for="(image, imageIndex) in kuchnie"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
          ></div>

          <!-- galery end kuchnie -->
        </vk-tabs-item>
        <vk-tabs-item title="Pokoje">
          <gallery :images="pokoje" :index="index" @close="index = null"></gallery>
          <div
            data-aos="zoom-in-up"
            class="image"
            v-for="(image, imageIndex) in pokoje"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
          ></div>
        </vk-tabs-item>
        <vk-tabs-item title="Łazienki">
          <gallery :images="lazienki" :index="index" @close="index = null"></gallery>
          <div
            data-aos="zoom-in-up"
            class="image"
            v-for="(image, imageIndex) in lazienki"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
          ></div>
        </vk-tabs-item>
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
        "/img/received_1027644290659179.jpeg",
        "/img/20161119_115925.jpg",
        "/img/received_1027644213992520.jpeg",
        "/img/IMG_20190131_144343.jpg",
        "kuchnie/20180309_104832.jpg",
        "kuchnie/20180309_104858.jpg",
        "kuchnie/20180309_104908.jpg",
        "kuchnie/20161119_115809.jpg",
        "kuchnie/20161119_115947.jpg",
        "kuchnie/IMG_20190131_144343.jpg",
        "kuchnie/IMG_20190131_144425.jpg",
        "kuchnie/IMG_20190814_104626_1.jpg",
        "kuchnie/IMG_20190814_104633.jpg",
        "kuchnie/IMG_20190814_105246.jpg",
        "kuchnie/IMG_20190814_105305.jpg",
        "kuchnie/received_1027644273992514.jpeg",
        "kuchnie/received_1027644307325844.jpeg",
        "kuchnie/received_1027644350659173.jpeg",
        "kuchnie/received_1027644353992506.jpeg"
      ],
      pokoje: [
        "/pokoje/20161119_115314.jpg",
        "/pokoje/20161119_115426.jpg",
        "/pokoje/20161119_120106.jpg",
        "/pokoje/20161119_120311.jpg",
        "/pokoje/20161216_131239.jpg",
        "/pokoje/20170209_145709.jpg",
        "/pokoje/20170706_125932.jpg",
        "/pokoje/20170706_125944.jpg",
        "/pokoje/IMG_20190131_111857.jpg",
        "/pokoje/IMG_20190131_111908.jpg",
        "/pokoje/received_1027644083992533.jpeg",
        "/pokoje/received_1027644090659199.jpeg",
        "/pokoje/received_1027644323992509.jpeg",
        "/pokoje/received_1027644337325841.jpeg"
      ],
      lazienki: [
        "lazienki/20161216_131142.jpg",
        "lazienki/20161216_131155.jpg",
        "lazienki/20161220_130223.jpg",
        "lazienki/20161220_130230.jpg",
        "lazienki/20161220_130255.jpg"
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
 