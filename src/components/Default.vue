<template>
  <div class="landing">
    <div class="uk-container uk-container-expand">
      <FurnitureCarousel></FurnitureCarousel>

      <div class="uk-margin-large-top ">
        <vk-grid gutter="small" matched class="uk-child-width-1-3@m">
          <div>
            <vk-card class="uk-card-hover" >
              <vk-card-title>    <font-awesome-icon icon="home" />  O firmie</vk-card-title>
              <p>Kuchnie Plus - jesteśmy firmą z wielopokoleniowym doświadczeniem, z którym łączymy perfekcję wykonania, dbałość o szczegóły oraz zaangażowanie. Na co dzień realizujemy najbardziej wciągające projekty, stosując przy tym najnowsze rozwiązania technologiczne.</p>
            </vk-card>
          </div>
          <div>
            <vk-card class="uk-card-hover">
              <vk-card-title><font-awesome-icon icon="briefcase" /> Portfolio </vk-card-title>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </vk-card>
          </div>
          <div>
            <vk-card class="uk-card-hover">
              <vk-card-title><font-awesome-icon icon="address-card" /> Kontakt</vk-card-title>
              <p>Zapraszamy do kontaktu z nami! Chętnie odpowiemy na pytania lub przygotujemy wycenę. Zachęcamy również do wizyty w naszym krakowskim showroomie, gdzie zaprezentujemy nasze niektóre realizacje.</p>
               
               <span><a style="color: green" href="#">Formularz kontaktowy</a></span> <br>
         <font-awesome-icon   icon="phone" />  <span  >&nbsp;48+ 12132356</span>
     
            </vk-card>
          </div>
        </vk-grid>
      </div>


    </div>

    
     

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
