import Vue from 'vue'
import App from './App.vue'

import Carousel3d from 'vue-carousel-3d';
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faHome, faBriefcase, faAddressCard, faPhone} from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faBriefcase, faAddressCard, faPhone)


Vue.component('font-awesome-icon', FontAwesomeIcon)


import '@vuikit/theme'

Vue.use(Vuikit)
Vue.use(VuikitIcons)
Vue.use(Carousel3d);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
