<template>
  <AppHeader :is-logged-in="isLoggedIn" />
  <v-app>
    <v-main>
      <router-view />
      <Chat />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<style>
.v-application {
  background-color: rgb(1, 7, 15) !important;
  color: white !important;
}
</style>

<script setup>
import { onMounted, ref } from "vue";
import { auth } from "@/firebase/init"; // Adjust the import path as necessary
import { onAuthStateChanged } from "firebase/auth";
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";
import Chat from "./components/Chat.vue";

const isLoggedIn = ref(false); // Reactive property to track login status

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
});
</script>
