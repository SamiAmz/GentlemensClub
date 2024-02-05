<template>
  <div id="page-container">
    <video autoplay loop muted playsinline>
      <source src="@/assets/intro.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <v-container>
      <v-carousel cycle interval="3000" hide-delimiters :show-arrows="false">
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item" cover></v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container class="d-flex flex-row justify-space-between">
      <v-card class="mx-auto my-8" elevation="16">
        <v-card-title>
          <p class="font-weight-light">Art Martial</p>

        </v-card-title>
        <v-img src="@/assets/wrestling-logo.png"></v-img>
      </v-card>
      <v-card class="mx-auto my-8" elevation="16">
        <v-card-title>
          <p class="font-weight-light">Art Martial</p>

        </v-card-title>
        <v-img src="@/assets/wrestling-logo.png"></v-img>
      </v-card>
      <v-card class="mx-auto my-8" elevation="16">
        <v-card-title>
          <p class="font-weight-light">Art Martial</p>

        </v-card-title>
        <v-img src="@/assets/wrestling-logo.png"></v-img>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import item1 from "@/assets/box3.png";
import item2 from "@/assets/box3.png";
import item3 from "@/assets/box3.png";
export default {
  name: "Home",
  data() {
    return {
      items: [item1, item2, item3],
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

.v-card {
  background: repeating-linear-gradient(45deg, rgb(255, 215, 0), rgb(254, 241, 150), rgb(250, 217, 30), rgb(255, 217, 0));
  width: 23vw;
  height: 30vw;
  border: 2px solid #FFD700;
  border-radius: 35px;
  transition: transform 0.3s ease-in-out;
}

.v-card:hover {
  transform: scale(1.1);
}

.v-card-title {
  text-align: center;
  font-size: 3.5em;
  padding-top: 90px;
}

.v-img {
  border-radius: 35px;
}

.v-card-subtitle {
  color: rgb(255, 255, 255);
}

#page-container {
  background-color: rgb(1, 7, 15);
  color: white;
}
</style>
