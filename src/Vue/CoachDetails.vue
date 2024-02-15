<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" v-if="coach">
        <!-- Displaying Coach Image -->
        <v-img :src="coach.image" aspect-ratio="1.7"></v-img>
      </v-col>
      <v-col cols="12" md="6" v-if="coach">
        <!-- Displaying Coach Name, Title, and Biography -->
        <h1>{{ coach.name }}</h1>
        <h2>{{ coach.title }}</h2>
        <p>{{ coach.bio }}</p>
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
  props: {
    coachId: {
      type: Number,
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
        const docRef = doc(db, "coachs", "coach"); // Assuming 'coach' is the document ID
const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          this.coach = docSnap.data();
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
/* Add any specific styles for your coach details page here */
</style>
