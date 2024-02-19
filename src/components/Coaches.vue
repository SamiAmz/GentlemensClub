<template>
  <v-row>
    <v-col
      cols="12"
      sm="4"
      md="4"
      v-for="(coach, index) in coaches"
      :key="`col-${index}`"
      class="coach-column"
    >
      <router-link :to="{ name: 'Coach', params: { coachId: coach.id } }">
        <v-card class="coach-card" flat>
          <div class="image-container">
            <img :src="coach.image" class="coach-img" :alt="coach.name" />
          </div>
        </v-card>
      </router-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Coaches",
  data() {
    return {
      coaches: [
        {
          id: "coach1",
          name: "Lentz-Edouard Lundy",
          title: "Entraîneur de boxe",
          image: "/coach-cards/card1.png",
        },
        {
          id: "coach2",
          name: "Pejman « PJ » Hedayati",
          title: "Entraîneur de boxe",
          image: "/coach-cards/card2.png",
        },
        {
          id: "coach3",
          name: "Anatolie Caraterzi",
          title: "Entraîneur de lutte",
          image: "/coach-cards/card3.png",
        },
        {
          id: "coach4",
          name: "Sandro Ferr",
          title: "Entraîneur de lutte",
          image: "/coach-cards/card4.png",
        },
        {
          id: "coach5",
          name: "Rob Rivest ",
          title: "Entraîneur de MMA",
          image: "/coach-cards/card5.png",
        },
        {
          id: "coach6",
          name: "Firas Zahabi",
          title: "Entraîneur de MMA",
          image: "/coach-cards/card6.png",
        },
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
.coach-card {
  transition: transform 0.3s ease;
  box-shadow: none;
  width: 97%; /* Fill the column width */
}

.image-container {
  position: relative;
}

.image-container::before {
  content: "";
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
</style>
