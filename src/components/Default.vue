<template>
  <div class="landing">
    <div class="uk-container uk-container-expand">
      <FurnitureCarousel></FurnitureCarousel>

      <div class="uk-margin-large-top">
        <vk-grid gutter="small" matched class="uk-child-width-1-3@m uk-animation-fade">
          <div data-aos="zoom-in-up">
            <vk-card class="uk-card-hover">
              <vk-card-title>
                <font-awesome-icon icon="home" />&nbsp; O firmie
              </vk-card-title>
              <p>New Concept - jesteśmy firmą z wielopokoleniowym doświadczeniem, z którym łączymy perfekcję wykonania, dbałość o szczegóły oraz zaangażowanie. Na co dzień realizujemy najbardziej wciągające projekty, stosując przy tym najnowsze rozwiązania technologiczne.</p>
            </vk-card>
          </div>
          <div>
            <vk-card class="uk-card-hover" data-aos="fade-down">
              <router-link to="Portfolio" tag="div" style="cursor: pointer">
                <vk-card-title>
                  <font-awesome-icon icon="briefcase" />&nbsp; Portfolio
                </vk-card-title>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </router-link>
            </vk-card>
          </div>

          <div data-aos="zoom-in-up">
            <vk-card class="uk-card-hover">
              <vk-card-title>
                <font-awesome-icon icon="address-card" />&nbsp; Kontakt
              </vk-card-title>
              <p>Zapraszamy do kontaktu z nami! Chętnie odpowiemy na pytania lub przygotujemy wycenę. Zachęcamy również do wizyty w naszym krakowskim showroomie, gdzie zaprezentujemy nasze niektóre realizacje.</p>

              <span>
                <a style="color: green" href="#">
                  <router-link to="Kontakt">Formularz kontaktowy</router-link>
                </a>
              </span>
              <br />
              <font-awesome-icon icon="phone" />
              <span>&nbsp;48+ 127132356</span>
            </vk-card>
          </div>
        </vk-grid>
      </div>
    </div>

    <!-- parralax start -->

    <div
      style="color: #777;background-color:white;text-align:center;padding:50px 80px;text-align: justify;"
    >
      <div data-aos="fade-up-right">
        <h3 style="text-align:center;">New Concept</h3>
        <p>New Concept - jesteśmy firmą z wielopokoleniowym doświadczeniem, z którym łączymy perfekcję wykonania, dbałość o szczegóły oraz zaangażowanie. Na co dzień realizujemy najbardziej wciągające projekty, stosując przy tym najnowsze rozwiązania technologiczne.</p>
      </div>
    </div>

    <div class="bgimg-2">
      <div class="caption">
        <div data-aos="zoom-in-up"></div>
      </div>
    </div>

    <div
      style="color: #777;background-color:white;text-align:center;padding:50px 80px;text-align: justify;"
    >
      <div data-aos="zoom-in-up">
        <h3 style="text-align:center;">OFERTA</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae felis sed ipsum dictum aliquam. Nullam ut lorem nulla. In ornare iaculis enim. Pellentesque ac quam leo. Donec tincidunt consectetur maximus. Sed vel sapien faucibus, rutrum tortor nec, pulvinar purus. Nullam hendrerit eu augue ac tincidunt. Vestibulum hendrerit lectus nec enim rhoncus pharetra. Pellentesque id fringilla metus. Donec id justo ac nisi sollicitudin malesuada eu et ante. Aenean rhoncus magna tortor, ac viverra ipsum pretium malesuada.</p>
      </div>
    </div>

    <div class="bgimg-3">
      <div class="caption">
        <div data-aos="fade-right"></div>
      </div>
    </div>
    <!-- parralax end -->
  </div>
</template>

<script>
import FurnitureCarousel from "./furniture-carousel.vue";

export default {
  components: {
    FurnitureCarousel
  }
};
</script>



<style scoped>
.profile {
  text-shadow: 2px 2px #000000;
}
.bio {
  text-shadow: 1px 1px #000000;
  text-align: justify;
}
ul {
  display: table;
  margin: 0 auto;
  font-size: 15px;
}
body,
html {
  height: 100%;
  margin: 0;
  font: 400 15px/1.8 "Lato", sans-serif;
  color: #777;
}
.bgimg-2,
.bgimg-3 {
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bgimg-2 {
  background-image: url("../../static/images/IMG_20190131_125020.jpg");
  min-height: 400px;
}
.bgimg-3 {
  background-image: url("../../static/images/IMG_20190814_105259.jpg");
  min-height: 400px;
}

.caption {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
}
.caption span.border {
  background-color: #111;
  color: #fff;
  padding: 18px;
  font-size: 25px;
  letter-spacing: 10px;
}
h3 {
  letter-spacing: 5px;
  text-transform: uppercase;
  font: 20px "Lato", sans-serif;
  color: #111;
}
.niceclass {
  background-color: transparent;
}
/* Turn off parallax scrolling for tablets and phones */
@media only screen and (max-device-width: 1024px) {
  .bgimg-1,
  .bgimg-2,
  .bgimg-3,
  .bgimg-4 {
    background-attachment: scroll;
  }
}
</style>