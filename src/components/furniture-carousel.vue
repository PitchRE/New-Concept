<template>
  <carousel-3d
    :inverse-scaling="100"
    :width="420"
    :height="330"
    :space="400"
    id="cos"
    :autoplay="true"
    :controlsVisible="false"
  >
    <slide :index="0">
      <img src="/img/IMG_20190131_144343.webp" />
    </slide>
    <slide :index="1">
      <img src="/img/received_1027644213992520.webp" />
    </slide>
    <slide :index="2">
      <img src="/img/20161119_115925.webp" />
    </slide>
    <slide :index="3">
      <img src="/img/received_1027644290659179.webp" />
    </slide>
    <slide :index="4">
      <img src="/img/received_1027644323992509.webp" />
    </slide>
  </carousel-3d>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    Carousel3d,
    Slide
  }
};
</script>

<style >
.carousel-3d-container .carousel-3d-slide {
  padding: 25px;
  background-color: rgba(249, 249, 250, 0.404);
}
</style>