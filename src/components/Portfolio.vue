<template>
  <div>
    <div class="uk-container">
      <vk-tabs align="center" class="uk-margin-large-top">
        <vk-tabs-item title="Kuchnie">
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
        <vk-tabs-item title="Pokoje">
          <gallery :images="pokoje" :index="index" @close="index = null"></gallery>
          <div
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
        "/img/received_1027644290659179.webp",
        "/img/20161119_115925.webp",
        "/img/received_1027644213992520.webp",
        "/img/IMG_20190131_144343.webp",
        "kuchnie/20180309_104832.webp",
        "kuchnie/20180309_104858.webp",
        "kuchnie/20180309_104908.webp",
        "kuchnie/20161119_115809.webp",
        "kuchnie/20161119_115947.webp",
        "kuchnie/IMG_20190131_144343.webp",
        "kuchnie/IMG_20190131_144425.webp",
        "kuchnie/IMG_20190814_104626_1.webp",
        "kuchnie/IMG_20190814_104633.webp",
        "kuchnie/IMG_20190814_105246.webp",
        "kuchnie/IMG_20190814_105305.webp",
        "kuchnie/received_1027644273992514.webp",
        "kuchnie/received_1027644307325844.webp",
        "kuchnie/received_1027644350659173.webp",
        "kuchnie/received_1027644353992506.webp"
      ],
      pokoje: [
        "/pokoje/20161119_115314.webp",
        "/pokoje/20161119_115426.webp",
        "/pokoje/20161119_120106.webp",
        "/pokoje/20161119_120311.webp",
        "/pokoje/20161216_131239.webp",
        "/pokoje/20170209_145709.webp",
        "/pokoje/20170706_125932.webp",
        "/pokoje/20170706_125944.webp",
        "/pokoje/IMG_20190131_111857.webp",
        "/pokoje/IMG_20190131_111908.webp",
        "/pokoje/received_1027644083992533.webp",
        "/pokoje/received_1027644090659199.webp",
        "/pokoje/received_1027644323992509.webp",
        "/pokoje/received_1027644337325841.webp"
      ],
      lazienki: [
        "lazienki/20161216_131142.webp",
        // "lazienki/20161216_131155.webp",
        "lazienki/20161220_130223.webp",
        "lazienki/20161220_130230.webp",
        "lazienki/20161220_130255.webp"
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
 