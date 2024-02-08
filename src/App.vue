<template>
<AppHeader />
    <v-app>
      <v-main>
        <router-view />
      </v-main>
    </v-app>

   
      <AppFooter />
  

</template>

<style>
.v-application {
  background-color: rgb(1, 7, 15) !important;
  color: white !important;

}


</style>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";
</script>


