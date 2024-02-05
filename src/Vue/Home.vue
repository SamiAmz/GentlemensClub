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
          <h1 class="descriptionTitle">{{ card.description.title }}</h1>
          <h2 class="descriptionSubTitle">{{ card.description.subtitle }}</h2>
          <p class="descriptionContent" v-html="card.description.content"></p>
          <div class="cta">
            <v-btn color="rgb(255, 91, 8)" @click="learnMore(index)">En savoir plus
              <v-icon large color="white">mdi-arrow-right-bold</v-icon>
            </v-btn>
          </div>
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
            title: 'Karate🥋',
            subtitle: 'Un voyage vers l\'équilibre mental et physique. ✨',
            content: '<br><b>Techniques de Frappe</b> 🥋: Apprentissage des différentes techniques de frappe avec les mains et les pieds.<br><br><b>Développement Physique</b> 💪: Renforcement musculaire, flexibilité et amélioration de la coordination.<br><br><b>Entraînement sur la discipline </b>📘: Apprenez les mouvements de défense personnelle et découvrez l\'histoire riche du Karaté. <br><br><b>Explorez l\'art ancien du Karaté</b> 🥷: Renforcez votre esprit, améliorez votre flexibilité et forgez votre caractère.',
          },
        },
        {
          title: 'Wrestling',
          image: wrestlingImage,
          isFlipped: false,
          description: {
            title: 'Wrestling 🤼',
            subtitle: 'Un parcours vers la force et la stratégie mentale. 💪',
            content: '<br><b>Techniques de Lutte</b> 🤼‍♂️: Maîtrisez une variété de techniques de lutte, des prises de base aux mouvements avancés.<br><br><b>Développement Physique</b> 💪: Renforcez votre corps, améliorez votre endurance et développez une force fonctionnelle essentielle.<br><br><b>Stratégies et Tactiques</b> 🤔: Apprenez à anticiper les mouvements de votre adversaire et à prendre des décisions rapides sur le tapis.<br><br><b>Forgez votre esprit et votre corps</b> 🤸‍♂️: La lutte développe non seulement la force physique, mais aussi la résilience mentale.',
          },
        },
        {
          title: 'Boxing',
          image: boxingImage,
          isFlipped: false,
          description: {
            title: 'Boxing 🥊',
            subtitle: 'Un parcours vers la puissance et la précision. 👊',
            content: '<br><b>Techniques de Frappe</b> 🥊: Maîtrisez l\'art des coups, de la jab à l\'uppercut, et perfectionnez votre précision.<br><br><b>Conditionnement Physique</b> 💪: Améliorez votre endurance, renforcez votre cœur et développez la rapidité de vos mouvements.<br><br><b>Stratégie sur le Ring</b> 🤔: Apprenez à lire votre adversaire et à élaborer des stratégies pour remporter le combat.<br><br><b>Entraînement Intensif</b> 🏋️‍♂️: Plongez dans des séances d\'entraînement intenses pour perfectionner vos compétences.',
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
    learnMore(index) {
      console.log("En savoir plus sur la carte", index);
    },
  },
};
</script>



<style scoped>
.v-img {
  margin-top: 55px;
}

.cta {
  margin-top: 10px;
  color: rgb(255, 91, 8);
}

.v-carousel {
  width: 80vw;
  margin: 0 auto;
  padding: 0;
  display: block;
}

.v-carousel-item {
  margin: 0;
  padding: 0;
}

video {
  width: 80vw;
  margin: 0 auto;
  padding: 0;
  display: block;
}

.description {
  display: none;
  text-align: center;
  transform: rotateY(0deg);
}

.descriptionTitle {
  font-size: 40px;
}

.descriptionSubTitle {
  font-size: 20px;
}

.descriptionContent {
  font-size: 15px;
  text-align: left;
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
  height: 38vw;
  border: 2px solid #FFD700;
  border-radius: 35px;
  transition: transform 0.5s ease;
}

.v-card.flipped {
  transform: rotateY(180deg);

}

.v-card-title {
  text-align: center;
  font-size: 3.5em;
  padding-top: 50px;
}

.v-card-subtitle {
  color: rgb(255, 255, 255);
}

#page-container {
  background-color: black;
  color: white;
}
</style>
