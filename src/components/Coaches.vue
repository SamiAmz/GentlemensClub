<template>
  <div class="container"> 
    <v-row dense>
      <v-col cols="12" sm="4" md="4" v-for="n in 6" :key="`col-${n}`">
        <v-card class="coach-card" flat>
          <div class="image-container">
            <img :src="getImage(n)" class="coach-img" :alt="`Coach ${n}`">
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Coaches",
  methods: {
    getImage(n) {
      return `/coach-cards/card${n}.png`;
    },
  },
};
</script>

<style>
.container {
  max-width: 1200px; 
  margin: auto; 
  padding-bottom: 200px;
}

.coach-card {
  transition: transform 0.3s ease; /* Smooth transition for hover effect */
  margin: 10px; /* Increase margin to create more space between cards */
  box-shadow: none; 
}

.image-container {
  position: relative;
}

.image-container::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* Darken the image */
  transition: background 0.3s ease; /* Smooth transition for hover effect */
  z-index: 1;
}

.coach-img {
  width: 100%; 
  height: auto; 
  display: block;
  transition: transform 0.3s ease; 
}

.coach-card:hover {
  transform: scale(1.05); 
}

.coach-card:hover .image-container::before {
  background: rgba(0, 0, 0, 0); /* Lighten the image back on hover */
}

/* Adjust the padding for the columns to increase space between them */
.v-col {
  padding-left: 16px;
  padding-right: 16px;
}
</style>
