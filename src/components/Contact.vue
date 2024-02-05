<template>
  <div id="page-container">
      <v-row align="start">
        <v-col cols="12" md="6">
          <v-card flat class="text-card">
            <v-card-title  class="title">Qui sommes-nous ?</v-card-title>
            <v-card-text class="text">
              Gentlemen's club a ouvert ses portes en 2012 et depuis est considéré comme étant le centre d'art martiaux mixtes #1 à Montréal. Que ce soit en boxe, en MMA ou en lutte, nos entraîneurs ont été formés pour fournir un enseignement de qualité et adapté à tous les niveaux, du débutant à l'athlète de haut niveau.
            </v-card-text>
            <v-card-title class = "title"> Notre mission</v-card-title>
            <v-card-text class = "text">
              Nous nous engageons à offrir un environnement sûr et respectueux <br>où chaque membre peut évoluer, progresser et atteindre ses objectifs <br>
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

      <v-row class = "subTitle"> 
        <v-card-title> Nos entraîneurs </v-card-title>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="coach-card">
            <v-card-text class = "coach-title"> 🥊</v-card-text>
            <v-img src="@/assets/coach1.png" class="coach-img"></v-img>
            <v-card-title class="coach-title">Coach de box </v-card-title>
            <v-card-text class="coach-text">Coach Description</v-card-text>
          </v-card>
          
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="coach-card">
            <v-card-text class = "coach-title"> 🤼🏽 </v-card-text>
            <v-img src="@/assets/coach1.png" class="coach-img"></v-img>
            <v-card-title class="coach-title">Coach de lutte </v-card-title>
            <v-card-text class="coach-text">teste</v-card-text>
          </v-card>
          
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="coach-card">
            <v-card-text class = "coach-title"> 🥋</v-card-text>
            <v-img src="@/assets/coach1.png" class="coach-img"></v-img>
            <v-card-title class="coach-title">Coach de MMA</v-card-title>
            <v-card-text class="coach-text">Coach Description</v-card-text>
          </v-card>
          
        </v-col>


      </v-row>
     
    
  </div>
</template>

<style scoped>

.coach-title {
  display: flex;
  justify-content: center;
  font-size: 50px;
  margin-bottom: 9px;
}
.coach-card {
  border: 3px solid rgb(243,237,237); 
  border-radius: 15px; 
  overflow: hidden; 
  transition: transform 0.4s ease;
  margin: 1rem; 
  background-color: rgb(243,237,237);
  height: 500px
}

.coach-card:hover {
  transform: translateY(-60px); 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}

.coach-img {
  height: 350px;
  width: 100%; 
}

.coach-title {
  color: white; 
  text-align: center; 
  margin-top: 1rem; 
}

.coach-text {
  color: rgb(1, 7, 15);
  padding: 0 1rem 1rem; 
  text-align: left;
}

.v-card-title {
    font-size: 50px;
    margin-bottom: 16px; 
  
}
.subTitle {
  display: flex;
  justify-content: center;
}

.info {
  display: flex;
  justify-content: center;
}

.text {
  font-size: 22px; 
  padding-bottom: 2px;
  line-height: 30px;
}

#page-container {
  background-color: rgb(1, 7, 15);
  min-height: 100vh;
}

.contactPage {
  padding: 20px; 
}

.logo-img {
  max-width: 100%;
  height: 800px;
  margin-right: 49px;
}


.text-card{
  background-color: rgb(1, 7, 15);
  color: rgb(243,237,237);
  padding-left: 200px;
  padding-top: 100px;
}

.v-card-title {
  padding-top: 60px;
  color: rgb(255, 91, 8)

}

.image-wrapper {
  margin-top: 30px;

}
</style>

<script>
export default {
  name: "Contact",
}; 
</script>
