import { createRouter, createWebHistory } from "vue-router";
import Home from "../vue/Home.vue";
import Contact from "../components/Contact.vue"
import Horaire from "../Vue/Horaire.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/contact",
      name: "contact",
      component: Contact
    },

    {
      path: "/horaire",
      name: "horaire",
      component: Horaire
    }
  ],
});

export default router;
