import { createRouter, createWebHistory } from "vue-router";
import Home from "../vue/Home.vue";
import Contact from "../components/Contact.vue";
import Horaire from "../components/Horaire.vue";
import Login from "../vue/userView/Login.vue";
import Signup from "../vue/userView/Signup.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/horaire",
      name: "horaire",
      component: Horaire
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
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    }
  ],
});

export default router;
