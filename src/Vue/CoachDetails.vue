<template>
    <div>
      <!-- Your template for displaying coach details -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      coachId: {
        type: [String, Number],
        required: true,
      },
    },
    data() {
      return {
        // Initial state for your coach details
      };
    },
    // Fetch the coach details using the coachId when the component is created
    created() {
      this.fetchCoachDetails();
    },
    methods: {
      fetchCoachDetails() {
        // Fetch the details of the coach based on this.coachId
      },
    },
  };
  </script>
  