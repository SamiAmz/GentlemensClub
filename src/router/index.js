import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/firebase/init";
import Home from "../Vue/Home.vue";
import Contact from "../components/Contact.vue";
import Horaire from "../components/Horaire.vue";
import Login from "../Vue/userView/Login.vue";
import Signup from "../Vue/userView/Signup.vue";
import CoachDetails from "../Vue/CoachDetails.vue";
import Profile from "../Vue/userView/Profile.vue";
import Sports from "../components/Sports.vue";
import Mma from "../components/Sports/Mma"
import Box from "../components/Sports/Box"
import Wrestling from "../components/Sports/Wrestling"

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
      path: "/Mma",
      name: "Mma",
      component: Mma,
      props: true,
    },
    {
      path: "/Box",
      name: "Box",
      component: Box,
      props: true,
    },

    {
      path: "/Wrestling",
      name: "Wrestling",
      component: Wrestling,
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
