<template>
    <v-row align="start">
      <v-col cols="12" md="6">
        <v-card flat class="text-card">
          <v-card-title class="title">Qui sommes-nous ?</v-card-title>
          <v-card-text class="text">
            Gentlemen's club a ouvert ses portes en 2012 et depuis est considéré comme étant le centre d'art martiaux
            mixtes #1 à Montréal. Que ce soit en boxe, en MMA ou en lutte, nos entraîneurs ont été formés pour fournir un
            enseignement de qualité et adapté à tous les niveaux, du débutant à l'athlète de haut niveau.
          </v-card-text>
          <v-card-title class="title"> Notre mission</v-card-title>
          <v-card-text class="text">
            Nous nous engageons à offrir un environnement sûr et respectueux <br>où chaque membre peut évoluer, progresser
            et atteindre ses objectifs <br>
            personnels.Rejoignez-nous pour une expérience d'entraînement unique et <br> dynamique.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <div class="image-wrapper">
          <v-img src="@/assets/logo.png" class="logo-img"></v-img>
        </div>
      </v-col>
    </v-row>

    <v-row class="subTitle">
      <v-card-title> Nos entraîneurs </v-card-title>
    </v-row>
    <coaches></coaches>
  

</template>

<style scoped>


.v-card-title {
  font-size: 50px;
  margin-bottom: 16px;

}


.subTitle {
  display: flex;
  justify-content: center;
}


.text {
  font-size: 18px;
  padding-bottom: 2px;
  line-height: 30px;
  text-align: left;
}


.text-card {
  background-color: rgb(1, 7, 15);
  color: rgb(243, 237, 237);
  padding-left: 200px;
  /* Reduced padding-top to bring the content up */
  padding-top: 50px; /* Adjust this value as needed */
}

.title {
  padding-top: 60px;
  color: rgb(255, 91, 8)
}

.image-wrapper {
  margin-left: 300px;
}
</style>

<script>
import Coaches from './Coaches.vue';

export default {
    name: "Contact",
    components: { Coaches }
}; 
</script>
