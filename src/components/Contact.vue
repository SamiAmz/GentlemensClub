<template>
  <v-row align="start">
    <v-col cols="4" md="3" class="description">
      <v-card-title class = "title" > Nos entraineurs</v-card-title>
      <v-card-text> Que ce soit pour s'amuser ou se dépasser ils sont là pour vous aider et répondre à vos questions.</v-card-text>
    
    </v-col>
    <v-col cols="12" md="9" class="coaches">
      <coaches></coaches>
    </v-col>
  </v-row>
  <about></about>
</template>

<script>
import About from './About.vue';
import Coaches from './Coaches.vue';

export default {
  name: "Contact",
  components: { Coaches, About }
};
</script>

<style scoped>
.coaches {
  padding-top: 100px;
  max-width: 1200px; 
  margin: auto; 
  padding-bottom: 200px;
}

.title {
  color: rgb(255, 91, 8);
  font-size: 30px;
  text-align: center;
  
}
.description {
  margin-top: 20%;
  
}

.v-card-text {
  font-size: 19px;
  display: flex; 
  justify-content: center; 
  flex-direction: column; 
  text-align: center; 
}



</style>
