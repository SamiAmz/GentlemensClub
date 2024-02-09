<template>
    <v-row>
      <v-col cols="12" md="8" class ="textcolumn">
        <v-card flat class="text-card">
          <v-card-title class="title">Qui sommes-nous ?</v-card-title>
          <v-card-text class="text">
            Gentlemen's club a ouvert ses portes en 2012 et depuis est considéré comme étant le centre d'art martiaux
            mixtes #1 à Montréal. Que ce soit en boxe, en MMA ou en lutte, nos entraîneurs ont été formés pour fournir un
            enseignement de qualité et adapté à tous les niveaux, du débutant à l'athlète de haut niveau.
          </v-card-text>
          <v-card-title class="title">Notre mission</v-card-title>
          <v-card-text class="text">
            Nous nous engageons à offrir un environnement sûr et respectueux où chaque membre peut évoluer, progresser
            et atteindre ses objectifs personnels. Rejoignez-nous pour une expérience d'entraînement unique et dynamique.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="image-wrapper">
          <v-img src="@/assets/logo.png" class="logo-img"></v-img>

      </v-col>
    </v-row>
  </template>
  
  <style scoped>

  .v-card-title {
    font-size: 50px;
    margin-bottom: 16px;
  
  }
  
  .subTitle {
    display: flex;
    justify-content: center;
    padding-top: 100px; /* Adjust padding to ensure it doesn't overlap with the header */
    padding-left: 16px; /* Add padding to align with the grid */
  }
  
  
  .text {
    font-size: 18px;
    line-height: 30px;
    text-align: left;
    padding: 0 16px; /* Add padding to align with the grid */
  }
  
  
  .text-card {
    background-color: rgb(1, 7, 15);
    color: rgb(243, 237, 237);
    padding: 16px; /* Adjust padding for alignment */
  }
  
  .title {
    padding-top: 60px;
    color: rgb(255, 91, 8)
  }
  

  
  
  .v-row {
    margin: 20px;
  }


  </style>
  
  <script>
  export default {
    name: "About"
  };
  </script>