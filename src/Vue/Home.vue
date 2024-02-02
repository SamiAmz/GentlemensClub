<template>
  <video autoplay loop muted playsinline>
    <source src="@/assets/intro.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <v-container>
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item" cover></v-carousel-item>
    </v-carousel>
  </v-container>
  <v-container>
    <v-app>
      <v-toolbar-title class="mr-5"> Club de Champions </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outlined class="mr-5" color="red"> Voir les abonnements. </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app>
    <v-btn icon></v-btn>
  </v-container>
</template>

<script>
import item1 from '@/assets/box.jpg';
import item2 from '@/assets/box2.jpg';
import item3 from '@/assets/box3.png';
export default {
  name: "Home",
  data() {
    return {
      athletes: [], //tableaux des athletes
      items: [
        item1,
        item2,
        item3
      ],
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
