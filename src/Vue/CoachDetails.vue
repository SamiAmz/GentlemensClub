<template>
  <v-container>
    <v-btn icon @click="goBack">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" v-if="coach">
        <v-img :src="imageSrc" aspect-ratio="1.7"></v-img>
      </v-col>
      <v-col cols="12" md="6" v-if="coach">
        <v-card-title> {{ coach.name }}</v-card-title>
        <v-card-subtitle>coach de {{ coach.class }}</v-card-subtitle>
        <v-card-text> {{ coach.bio }} </v-card-text>
      </v-col>
      <v-col cols="12" v-else>
        <p>Coach details not available. Please check back later.</p>
      </v-col>
    </v-row>
  </v-container>
  <Chat />
</template>

<script>
import { db } from "@/firebase/init";
import { doc, getDoc } from "firebase/firestore";

export default {
  computed: {
    imageSrc() {
      //regex pour recuperer seulement l'id
      const idNumber = this.coachId.replace(/^\D+/g, "");
      return `/coach-cards/card${idNumber}.png`;
    },
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

    goBack() {
      this.$router.go(-1);
    },
    async fetchCoachDetails() {
      try {
        const docRef = doc(db, "coachs", this.coachId); 
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          this.coach = docSnap.data();
          this.coach.name = `${docSnap.data().first_name} ${
            docSnap.data().last_name
          }`;
          this.coach.title = docSnap.data().specialiter; 
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
  font-family: 'Roboto', sans-serif; /* Roboto is a versatile and modern font */
}

/* Image card styles */
.v-card-img {
  border: 100px solid #cec1c1; /* Dark border for contrast */
  box-shadow: 0 4px 8px rgba(0,0,0,0.3); /* Shadow for depth */
  border-radius: 10px; /* Rounded corners */
  overflow: hidden; /* Ensures no overflow of content outside the border-radius */
}

/* Image styles */
.v-img {
  height: auto;
  max-width: 100%; /* Ensures image is responsive and does not overflow */
  object-fit: contain; /* Ensures the image fits within its container */
  box-sizing: border-box; /* Border included in the element's dimensions */
}

.v-btn {
  position: absolute; /* Positioning the button */
  top: 10%; /* Position from the top */
  left: 10%; /* Position from the left */
  z-index: 2; /* Ensure it's above other elements */
  background-color: rgb(255, 91, 8);
}
.v-card-subtitle {
  font-size: 18px; 
}
.v-card-title {
  font-size: 24px; 
  color: rgb(255, 91, 8);
  font-weight: bold;
  margin-bottom: 5px; 
}

.v-card-text {
  font-size: 15px;
  line-height: 1.6; 
}

.v-img {
  height: 600px;
  width: auto;
}
.v-container {
  margin-top: 100px;
}

.v-img {
  border-radius: 10px;
}
</style>
