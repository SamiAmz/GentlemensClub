<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" v-if="coach">
        <v-img :src="imageSrc" aspect-ratio="1.7"></v-img>
      </v-col>
      <v-col cols="12" md="6" v-if="coach">
        <v-card-title> {{coach.name}}</v-card-title>
        <v-card-subtitle>coach de {{coach.class}}</v-card-subtitle> 
        <v-card-text> {{coach.bio}} </v-card-text>

      </v-col>
      <v-col cols="12" v-else>
        <p>Coach details not available. Please check back later.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from '@/firebase/init'; 
import { doc, getDoc } from 'firebase/firestore';

export default {
  computed: {
    imageSrc() {
      //regex pour recuperer seulement l'id
      const idNumber = this.coachId.replace(/^\D+/g, ''); 
      return `/coach-cards/card${idNumber}.png`;
    }
  },
  props: {
    coachId: {
      type: String, 
      required: true,
    },
  },
  data() {
    return {
      coach: null,
    };
  },
  async created() {
    await this.fetchCoachDetails();
  },
  methods: {
    async fetchCoachDetails() {
      try {
        const docRef = doc(db, "coachs", this.coachId); // Use the coachId prop to reference the correct document
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          this.coach = docSnap.data();
          this.coach.name = `${docSnap.data().first_name} ${docSnap.data().last_name}`;
          this.coach.title = docSnap.data().specialiter; // Assuming 'specialiter' is the title field
          // You will need to add an 'image' field in Firestore or handle it differently if it's not there
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    },
  },
};
</script>

<style scoped>
.v-container {
  margin-top: 100px;
}

.v-img {
}
</style>
