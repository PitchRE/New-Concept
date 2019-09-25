<template>
  <div>
    <div class="uk-container uk-margin-large-top">
      <carousel-3d
        :inverse-scaling="100"
        :width="640"
        :space="400"
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
            src="https://images.pexels.com/photos/2959595/pexels-photo-2959595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </slide>
        <slide :index="4">
          <img
            src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </slide>
        <slide :index="5">
          <img
            src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
export default {};
</script>