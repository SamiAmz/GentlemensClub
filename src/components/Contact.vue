<template>
  <div id="page-container">
    <v-container fluid class="contactPage">
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-card flat class="text-card">
            <v-card-title  class="title">Qui sommes-nous ?</v-card-title>
            <v-card-text class="text">
              Gentlemen's club a ouvert ses portes en 2012 et depuis est considéré comme étant le centre d'art martiaux mixtes #1 à Montréal. Que ce soit en boxe, en MMA ou en lutte, nos entraîneurs ont été formés pour fournir un enseignement de qualité et adapté à tous les niveaux, du débutant à l'athlète de haut niveau.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="@/assets/logoBlack.png" class="logo-img"></v-img>
        </v-col>
      </v-row>

      <!-- Second Row for Notre mission -->
      <v-row class="mission-section">
        <v-col cols="12">
          <v-card-title class="title">Notre mission</v-card-title>
          <v-card-text class="text">Nous nous engageons à offrir un environnement sûr et respectueux <br>où chaque membre peut évoluer, progresser et atteindre ses objectifs <br>
            personnels.Rejoignez-nous pour une expérience d'entraînement unique et <br> dynamique.
</v-card-text>
        </v-col>
      </v-row>
    </v-container>  

    <v-container>
      <v-card-title> Nos entraîneurs</v-card-title>
    </v-container>
  </div>
</template>

<style scoped>
.title {
  font-size: 50px;
  margin-bottom: 16px; 
}

.text {
  font-size: 20px; 
}

#page-container {
  background-color: black;
  color: white;
  min-height: 100vh;
}

.contactPage {
  padding: 50px; 
}

.logo-img {
  max-width: 100%;
  height: auto;
  padding: 20px; 
}

.mission-section {
  margin-top: -350px; 
}

.text-card{
  background-color: black;
  color: white;
  margin-top: -220px;
}

.v-card-title {
  color: rgb(255, 91, 8)
}
</style>

<script>
export default {
  name: "Contact",
}; 
</script>
