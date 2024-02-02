<script setup>
//
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";
</script>

<template>
  <div>
    <header>
      <AppHeader />
    </header>
  </div>
  <div>
    <v-app>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
  <div>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>
