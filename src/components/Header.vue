<template>
  <v-layout>
    <v-app-bar id="semi-transparent-app-bar" :elevation="20">
      <v-row align="center" justify="space-between">
        <v-img max-width="90" max-height="100" src="@/assets/logo.png"></v-img>

        <div>
          <router-link to="/" exact active-class="button-active">
            <v-btn class="button-hover" color="white" outlined :ripple="false" text>
              Accueil
            </v-btn>
          </router-link>
          <router-link to="/horaire" exact active-class="button-active">
            <v-btn class="button-hover" color="white" outlined :ripple="false" text>
              Horaire
            </v-btn>
          </router-link>
          <router-link to="/contact" exact active-class="button-active">
            <v-btn class="button-hover" color="white" outlined :ripple="false" text>
              À propos
            </v-btn>
          </router-link>
        </div>

        <div>
          <router-link v-if="isLoggedIn" to="/profile" id="profile" style="text-decoration: none; color: inherit; display: flex; align-items: center;">
            <p id="profileText">Profil</p>
            <v-icon large color="white">mdi-account</v-icon>
          </router-link>

          <!-- Connexion Link (Shown when Logged Out) -->
          <router-link v-else id="login" to="/login" style="text-decoration: none; color: inherit; display: flex; align-items: center;">
            <p id="loginTexte">Connexion</p>
            <v-icon large color="white">mdi-login-variant</v-icon>
          </router-link>
        </div>
      </v-row>
    </v-app-bar>
  </v-layout>
</template>


<style scoped>
:deep(.button-active .v-btn__content) {
  color: rgb(255, 91, 8);
}

#semi-transparent-app-bar.scrolled {
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: none !important;
  padding-left: 100px;
  padding-right: 100px;
}

#semi-transparent-app-bar {
  background-color: black;
  box-shadow: none !important;
  padding-left: 100px;
  padding-right: 100px;
}

.v-btn {
  margin: 10px 20px;
  padding: 10px 20px;
  box-shadow: none;
  background: none;
  text-decoration: none;
  font-size: 15px;
}

.button-hover:before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: red;
  transition: width 0.3s ease;
}

.button-hover:hover:before {
  width: 100%;
}

#login {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

#loginTexte {
  margin-right: 8px;
  color: white;
  font-size: 20px;
}
</style>

<script>
import { auth } from "@/firebase/init";
import { signInWithEmailAndPassword } from "firebase/auth";
import "@mdi/font/css/materialdesignicons.css";

export default {
  name: "AppHeader",
  props: {
    isLoggedIn: Boolean,
  }
};

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var header = document.getElementById("semi-transparent-app-bar");
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
</script>
