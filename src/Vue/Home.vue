<template>
  <v-container>
    <video autoplay loop muted playsinline>
      <source src="@/assets/intro.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </v-container>
  <v-container>
    <v-img src="@/assets/box3.png"></v-img>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  date() {
    return {
      athletes: [], //tableaux des athletes
    };
  },
};
</script>
