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
      <v-card v-for="(card, index) in cards" :key="index" class="mx-auto my-8" elevation="16"
        :class="{ 'flipped': card.isFlipped }" @mouseover="flipCard(index, true)" @mouseleave="delayFlipBack(index)">
        <div v-if="!card.isFlipped">
          <v-card-title>
            <p class="carteTexte">{{ card.title }}</p>
          </v-card-title>
          <v-img :src="card.image"></v-img>
        </div>
        <div v-if="card.isFlipped" class="description">
          <h1>{{ card.description.title }}</h1>
          <h2>{{ card.description.subtitle }}</h2>
          <h3>{{ card.description.subsubtitle }}</h3>
          <p>{{ card.description.content }}</p>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import item1 from "@/assets/box3.png";
import item2 from "@/assets/box3.png";
import item3 from "@/assets/box3.png";
import karateImage from "@/assets/karate.png";
import wrestlingImage from "@/assets/wrestling.png";
import boxingImage from "@/assets/boxing.png";

export default {
  name: "Home",
  data() {
    return {
      items: [item1, item2, item3],
      cards: [
        {
          title: 'Karate',
          image: karateImage,
          isFlipped: false,
          description: {
            title: 'Karate Title',
            subtitle: 'Karate Subtitle',
            subsubtitle: 'Karate Subsubtitle',
            content: 'Description for Karate...',
          },
        },
        {
          title: 'Wrestling',
          image: wrestlingImage,
          isFlipped: false,
          description: {
            title: 'Wrestling Title',
            subtitle: 'Wrestling Subtitle',
            subsubtitle: 'Wrestling Subsubtitle',
            content: 'Description for Wrestling...',
          },
        },
        {
          title: 'Boxing',
          image: boxingImage,
          isFlipped: false,
          description: {
            title: 'Boxing Title',
            subtitle: 'Boxing Subtitle',
            subsubtitle: 'Boxing Subsubtitle',
            content: 'Description for Boxing...',
          },
        },
      ],
    };
  },
  methods: {
    flipCard(index, value) {
      this.cards[index].isFlipped = value;
    },
    delayFlipBack(index) {
      setTimeout(() => {
        this.flipCard(index, false);
      }, 600); //temps du flip
    },
  },
};
</script>



<style scoped>
.description {
  display: none;
  text-align: center;
  margin-left: 30px;
  transform: rotateY(0deg);
}

.flipped .description {
  display: block;
  transform: rotateY(180deg);
}

.carteTexte {
  font-size: 55px;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
  height: 50px;
  transform: rotateY(0deg);
}

.v-card {
  background: rgb(255, 215, 0);
  width: 23vw;
  height: 30vw;
  border: 2px solid #FFD700;
  border-radius: 35px;
  transition: transform 0.5s ease;
}

.v-card:hover {
  transform: scale(1.1);
}

.v-card.flipped {
  transform: rotateY(180deg);
}

.v-card-title {
  text-align: center;
  font-size: 3.5em;
  padding-top: 50px;
  margin-bottom: 50px;
}

.imgKarate {
  margin-top: 50px;
}

.v-card-subtitle {
  color: rgb(255, 255, 255);
}

#page-container {
  background-color: black;
  color: white;
}
</style>
