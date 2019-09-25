<template>
  <div>
    <div class="uk-container">
      <div class="uk-margin-medium-top">
        <vk-tabs align="center">
          <vk-tabs-item title="Klasyczne">
            <vk-grid class="uk-child-width-1-5@m uk-animation-fade">
              <router-link to="wizualizacja/a1">
                <div>
                  <vk-card class="uk-box-shadow-hover-xlarge">
                    <div slot="media-top">
                      <img
                        src="https://images.pexels.com/photos/2956952/pexels-photo-2956952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt
                      />
                    </div>
                    <div>
                      <p>A01</p>
                    </div>
                  </vk-card>
                </div>
              </router-link>

              <div>
                <vk-card class="uk-box-shadow-hover-xlarge">
                  <div slot="media-top">
                    <img
                      src="https://images.pexels.com/photos/2954888/pexels-photo-2954888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt
                    />
                  </div>
                  <div>
                    <vk-card-title>Media Top</vk-card-title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
                </vk-card>
              </div>
            </vk-grid>
          </vk-tabs-item>
          <vk-tabs-item title="Nowoczesne">Hello again!</vk-tabs-item>
        </vk-tabs>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>