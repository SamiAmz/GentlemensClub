<template>
    <video autoplay loop muted playsinline>
      <source src="@/assets/intro.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
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

<style scoped>
video {
 min-height: 40%;
min-width: 100%;
line-height: 0;

}
</style>
