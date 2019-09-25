<template>
  <carousel-3d
    :inverse-scaling="100"
    :width="640"
    :space="400"
    id="cos"
    :autoplay="true"
    :controlsVisible="false"
  >
    <slide :index="0">
      <img
        src="https://imgcomfort.com/Userfiles/Upload/images/Modules/BannerRotators/5-banner-5.jpg"
      />
    </slide>
    <slide :index="1">
      <img
        src="https://imgcomfort.com/Userfiles/Upload/images/Modules/BannerRotators/6-banner-6.jpg"
      />
    </slide>
    <slide :index="2">
      <img
        src="https://image.shutterstock.com/image-photo/modern-living-room-sofa-furniture-600w-549055441.jpg"
      />
    </slide>
    <slide :index="3">
      <img
        src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
    </slide>
    <slide :index="4">
      <img
        src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
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

