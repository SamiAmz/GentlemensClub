<template>
  <v-layout>
    <v-app-bar
      absolute
      darkhide-on-scroll
      prominent
      scroll-target="#scrolling-techniques-4"
      color="grey"
      :elevation="20"
    >
      <v-row align="center" justify="center">
        <p id="title">Club de Champions</p>
        <router-link to="/">
          <v-btn outlined :ripple="false" text>Accueil</v-btn>
        </router-link>
        <router-link to="/">
          <v-btn outlined :ripple="false" text>Cours</v-btn>
        </router-link>
        <router-link to="/">
          <v-btn outlined :ripple="false" text>À propos</v-btn>
        </router-link>
        <p id="login">login</p>
        <router-link to="/">
          <v-icon large color="black"> mdi-login-variant </v-icon>
        </router-link>
      </v-row>
    </v-app-bar>
  </v-layout>
</template>

<script>
import "@mdi/font/css/materialdesignicons.css";

export default {
  name: "AppHeader",
};
</script>

<style scoped>
.v-btn {
  margin: 10px 20px 10px 0;
  padding: 10px 20px 20px 20px;
  box-shadow: none;
  background: none;
  text-decoration: none;
  font-size: 15px;
}

.v-app-bar {
  background-color: rgb(28, 28, 28);
}

#login {
  color: black;
  font-size: 20px;
  margin-left: 5dvw;
}
#title {
  color: black;
  font-size: 20px;
  margin-right: 5dvw;
}
</style>
