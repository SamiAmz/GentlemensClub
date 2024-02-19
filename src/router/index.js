import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/firebase/init";
import Home from "../vue/Home.vue";
import Contact from "../components/Contact.vue";
import Horaire from "../components/Horaire.vue";
import Login from "../vue/userView/Login.vue";
import Signup from "../vue/userView/Signup.vue";
import CoachDetails from "../vue/CoachDetails.vue";
import Profile from "../vue/userView/Profile.vue";
import Sports from "../components/Sports.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/sports/:sportNom",
      name: "Sports",
      component: Sports,
      props: true,
    },
    {
      path: "/coach/:coachId",
      name: "Coach",
      component: CoachDetails,
      props: true, // This will pass the `coachId` as a prop to the component
    },

    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/horaire",
      name: "horaire",
      component: Horaire,
    },

    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },

    {
      path: "/horaire",
      name: "horaire",
      component: Horaire,
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
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
  ],
});

export default router;
