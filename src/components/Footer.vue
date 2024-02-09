<template>
  <div id="footer">
    <v-container>
      <v-row justify="center" align="center">
        <v-img class="logo" max-width="200" src="@/assets/logo.png"></v-img>
        <v-col cols="12" sm="6">
          <div class="footer-links">
            <router-link to="/">Accueil</router-link>
            <router-link to="/horaire">Horaire</router-link>
            <router-link to="/contact">A propos</router-link>
            <router-link to="/login">Login/Register</router-link>
          </div>
          <p>
            Copyright &copy; {{ currentYear }} Club de Champions. All rights
            reserved.<br />
            TOUS DROITS RÉSERVÉS
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
#footer {
  width: 100%;
  font-family: "trebuchet ms", sans-serif;
  font-size: 15px;
  background: #000000;
}

#footer p {
  margin-top: 0.5em;
  line-height: 1.7em;
  color: white;
}

.footer-links a {
  margin: 8px;
  color: white;
  text-decoration: none;
}

.footer-links {
  display: flex;
}

.footer-links a:hover {
  text-decoration: underline;
  color: red;
}
</style>
