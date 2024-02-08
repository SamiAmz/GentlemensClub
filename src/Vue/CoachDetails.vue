<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <!-- Coach Image -->
        <v-img :src="coach.image" aspect-ratio="1.7"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <!-- Coach Name and Description -->
        <h1>{{ coach.name }}</h1>
        <div>
          <h2>{{ coach.title }}</h2>
          <p>{{ coach.bio }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    coachId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      coach: null, // Start with no coach data
    };
  },
  created() {
    this.fetchCoachDetails();
  },
  methods: {
    fetchCoachDetails() {
      // This is a mock function simulating an HTTP request
      // In a real app, you would use this.$http.get or axios.get etc.
      const coachData = this.mockFetchCoachById(this.coachId);
      if (coachData) {
        this.coach = coachData;
      } else {
        console.error('Coach not found');
        // Handle coach not found, e.g., redirect to a not-found page or display a message
      }
    },
    mockFetchCoachById(coachId) {
      // Simulate fetching coach data by ID
      return this.$parent.coaches.find(coach => coach.id === coachId);
    },
  },
};
</script>

<style scoped>
/* Add your CSS here */
</style>
