<template>
  <div id="page-container">
    <video autoplay loop muted playsinline>
      <source src="@/assets/intro.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div id="pageCar-container">
      <v-img class="white--text" height="100vh" width="100vw">
        <div class="content-container">
          <div class="academy-title">Gentelmen's Club</div>
          <div class="buttons-container">
            <div class="phone-button">
              <v-btn icon @click="dialog = true">
                <v-icon large>mdi-phone</v-icon>
              </v-btn>

              <v-dialog v-model="dialog" persistent max-width="290">
                <v-card id="custom-card-id">
                  <v-card-title class="headline">Rappelle</v-card-title>
                  <v-card-text>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Ecrivez votre nom"
                        required
                      ></v-text-field>
                      <v-text-field
                        v-model="phone"
                        :rules="phoneRules"
                        label="Ecrivez votre téléphone"
                        required
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" text @click="dialog = false"
                      >Fermer</v-btn
                    >
                    <v-btn color="green" text @click="submitForm"
                      >Envoyer</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
            <div class="clubs-button">
              <v-btn color="error" dark>Voir les Abonnements</v-btn>
            </div>
          </div>
        </div>
        <v-carousel
          v-model="carousel"
          cycle
          hide-delimiters
          class="carousel-container"
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.image"
            class="carousel-item"
          >
            <div class="carousel-description">
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-img>
    </div>

    <v-container class="d-flex flex-row justify-space-between">
      <v-card
        v-for="(card, index) in cards"
        :key="index"
        class="mx-auto my-8"
        elevation="16"
        :class="{ flipped: card.isFlipped }"
        @mouseover="flipCard(index, true)"
        @mouseleave="delayFlipBack(index)"
      >
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
            <v-btn id="moreButton" color="rgb(255, 91, 8)" @click="learnMore(index)"
              >En savoir plus
              <v-icon large color="white">mdi-arrow-right-bold</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import karateImage from "@/assets/karate.png";
import wrestlingImage from "@/assets/wrestling.png";
import boxingImage from "@/assets/boxing.png";

import "@mdi/font/css/materialdesignicons.css";


export default {
  name: "Home",
  data() {
    return {
      dialog: false,
      valid: false,
      name: "",
      phone: "",
      nameRules: [(v) => !!v || "Name is required"],
      phoneRules: [(v) => !!v || "Phone is required"],
      items: [
        {
          name: "Karate Image",
          description: "Description for karate",
          image: karateImage,
        },
        {
          name: "Box Image",
          description: "Description for box",
          image: wrestlingImage,
        },
      ],
      carousel: 0,
      cards: [
        {
          title: "Karate",
          image: karateImage,
          isFlipped: false,
          description: {
            title: "Karate",
            subtitle: "Un voyage vers l'équilibre mental et physique.",
            content:
              "<br><b>Techniques de Frappe</b>Apprentissage des différentes techniques de frappe avec les mains et les pieds.<br><br><b>Développement Physique</b>Renforcement musculaire, flexibilité et amélioration de la coordination.<br><br><b>Entraînement sur la discipline </b>Apprenez les mouvements de défense personnelle et découvrez l'histoire riche du Karaté.",
          },
        },
        {
          title: "Wrestling",
          image: wrestlingImage,
          isFlipped: false,
          description: {
            title: "Wrestling",
            subtitle: "Un parcours vers la force et la stratégie mentale.",
            content:
              "<br><b>Techniques de Lutte</b>Maîtrisez une variété de techniques de lutte, des prises de base aux mouvements avancés.<br><br><b>Développement Physique</b>Renforcez votre corps, améliorez votre endurance et développez une force fonctionnelle essentielle.<br><br><b>Stratégies et Tactiques</b>Apprenez à anticiper les mouvements de votre adversaire.",
          },
        },
        {
          title: "Boxing",
          image: boxingImage,
          isFlipped: false,
          description: {
            title: "Boxing",
            subtitle: "Un parcours vers la puissance et la précision.",
            content:
              "<br><b>Techniques de Frappe</b>Maîtrisez l'art des coups, de la jab à l'uppercut, et perfectionnez votre précision.<br><br><b>Conditionnement Physique</b>Améliorez votre endurance, renforcez votre cœur et développez la rapidité de vos mouvements.<br><br><b>Stratégie sur le Ring</b>Apprenez à lire votre adversaire et à élaborer des stratégies pour remporter le combat.",
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
      }, 600);
    },
    learnMore(index) {
      console.log("En savoir plus sur la carte", index);
    },
    submitForm() {
      if (this.$refs.form.validate()) {
        console.log("Form submitted with:", this.name, this.phone);

        this.$refs.form.reset();
        this.$refs.form.resetValidation();
        alert("Merci, on va vous contacter le plus tôt possible.");
        this.dialog = false;
      }
    },
  },
};
</script>

<style scoped>

#pageCar-container {
  background-image: url("../assets/backgroundeasy.jpg");
  background-size: cover;
  background-position: center center;
}
#custom-card-id {
  background-color: white;
  width: 200%;
  height: 100%;
}

.buttons-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.content-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  padding: 2rem;
}

.academy-title {
  color: white;
  margin-top: 10rem;
  margin-left: 5rem;
  font-size: 120px;
}

#moreButton{
  margin-top: 45px;
}

.phone-button,
.clubs-button {
  margin-left: 10rem;
}
.phone-button {
  transform: scale(1.5);
  margin-right: 50px;
}

.clubs-button {
  transform: scale(1.5);
  margin-left: 50px;
}

.carousel-container {
  position: absolute;
  right: 0;
  bottom: 10%;
  width: 50%;
  height: 100vh;
}

.carousel-description {
  font-size: x-large;
  position: absolute;
  bottom: 0;
  right: 5%;
  color: white;
  text-align: center;
}

.carousel-item img {
  mix-blend-mode: multiply;
}

.v-card {
  background: rgb(200, 33, 0);
  width: 23vw;
  height: 38vw;
  border-radius: 10px;
  transition: transform 0.5s ease;
}

.cardBlur {
  background-color: rgb(0, 0, 0, 0.8);
}

.v-img {
  margin-top: 55px;
}

.cta {
  margin-top: 10px;
  color: rgb(255, 91, 8);
}

video {
  width: 100vw;
  margin: 0 auto;
  padding: 0;
  display: block;
  margin-top: -30px;
}

.description {
  display: none;
  text-align: center;
  transform: rotateY(0deg);
  margin: 10px;
}

.descriptionTitle {
  font-size: 40px;
}

.descriptionSubTitle {
  font-size: 22px;
}

.descriptionContent {
  font-size: 17px;
  text-align: left;
}

.flipped .description {
  display: block;
  transform: rotateY(180deg);
}

.carteTexte {
  font-size: 55px;
  font-weight: bold;
  height: 50px;
  transform: rotateY(0deg);
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


</style>
