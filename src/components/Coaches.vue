<template>
  <div class="container"> 
    <v-row dense>
      <v-col cols="12" sm="4" md="4" v-for="(coach, index) in coaches" :key="`col-${index}`">
        <router-link :to="{ name: 'Coach', params: { coachId: coach.id }}">
          <v-card class="coach-card" flat>
            <div class="image-container">
              <img :src="coach.image" class="coach-img" :alt="coach.name">
       
            </div>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>



<script>
export default {
  name: "Coaches",
  data() {
    return {
      coaches: [
        { id: 1, name: 'Lentz-Edouard Lundy', title: 'Entraîneur de boxe', bio: '...', image: '/coach-cards/card1.png' },
        { id: 2, name: 'Lentz-Edouard Lundy', title: 'Entraîneur de boxe', bio: '...', image: '/coach-cards/card2.png' },
        { id: 3, name: 'Lentz-Edouard Lundy', title: 'Entraîneur de boxe', bio: '...', image: '/coach-cards/card3.png' },
        { id: 4, name: 'Lentz-Edouard Lundy', title: 'Entraîneur de boxe', bio: '...', image: '/coach-cards/card4.png' },
        { id: 5, name: 'Lentz-Edouard Lundy', title: 'Entraîneur de boxe', bio: '...', image: '/coach-cards/card5.png' },
        { id: 6, name: 'Lentz-Edouard Lundy', title: 'Entraîneur de boxe', bio: '...', image: '/coach-cards/card6.png' },

        // ... more coaches
      ],
    };
  },
  methods: {
    getImage(n) {
      return `/coach-cards/card${n}.png`;
    },
  },
};

</script>

<style scoped>
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
