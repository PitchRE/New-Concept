import Default from "./components/Default.vue";
import Contact from "./components/contact.vue";
import Visualizations from "./components/visualizations.vue";

import a1 from "./components/visualisations/a1.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Default
  },
  {
    path: "/Kontakt",
    name: "Kontakt",
    component: Contact
  },
  {
    path: "/Wizualizacje",
    name: "Wizualizacje",
    component: Visualizations
  },
  {
    path: "/wizualizacja/a1",
    name: "a1",
    component: a1
  }
];
