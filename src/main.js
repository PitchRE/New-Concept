import Vue from "vue";
import App from "./App.vue";
import Carousel3d from "vue-carousel-3d";
import "@vuikit/theme";
import Vuikit from "vuikit";
import VuikitIcons from "@vuikit/icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faHome,
  faBriefcase,
  faAddressCard,
  faPhone,
  faEnvelope,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";
import VueRouter from "vue-router";
import Routes from "./routes";

library.add(
  faHome,
  faBriefcase,
  faAddressCard,
  faPhone,
  faEnvelope,
  faMapMarkedAlt
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Vuikit);
Vue.use(VuikitIcons);
Vue.use(Carousel3d);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes: Routes
});

new Vue({
  render: h => h(App),
  VueRouter,
  router: router
}).$mount("#app");
