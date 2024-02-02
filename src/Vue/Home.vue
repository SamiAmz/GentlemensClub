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

</template>

<script>
import item1 from '@/assets/box3.png';
import item2 from '@/assets/box3.png';
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
