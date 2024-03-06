<template>
  <div class="page-container">
    <div class="box-course-container">
      <div class="box-course-content-left">
        <h1 class="box-h1">Subscription du cours de Box</h1>
        <v-spacer></v-spacer>

        <p>
          Félicitations pour votre décision de rejoindre notre communauté Box !
          Avec votre abonnement, vous obtenez bien plus qu'un simple accès aux
          cours. Voici ce que vous pouvez attendre de votre abonnement:
        </p>
        <v-spacer></v-spacer>

        <h2 class="box-h2">Accès Illimité aux Installations :</h2>
        <ul class="box-ul">
          <li class="box-li">
            Profitez de nos installations de première classe, y compris les
            douches et le gymnase, pour vous préparer avant et après vos séances
            d'entraînement.
          </li>
          <h2 class="box-h2">Casier Personnel :</h2>
          <li class="box-li">
            Chaque abonné bénéficie d'un casier personnel sécurisé pour ranger
            vos affaires en toute tranquillité pendant que vous vous entraînez.
          </li>
          <h2 class="box-h2">Utilisation de l'Équipement :</h2>
          <li class="box-li">
            Utilisez notre équipement de qualité professionnelle pour vos
            entraînements, comprenant des sacs de frappe, des gants, des
            protège-tibias et bien plus encore.
          </li>
        </ul>
        <v-spacer></v-spacer>
        <button class="box-button" @click="subscribe">S'abonner</button>
      </div>
      <div class="box-course-content-right">
        <SubsCard :sportNom="sportNom" />
      </div>
    </div>
  </div>
</template>

<script>
import SubsCard from "../Subs-Card.vue";
export default {
  name: "Box",
  props: {
    sportNom: {
      type: String,
      required: true,
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    subscribe() {},
  },
};
</script>

<style scoped>
.v-spacer {
  margin-top: 20px;
}
.page-container {
  background: #333;
  margin-top: 10vh;
  padding-top: 1vh;
  padding-bottom: 50px;
}
.box-course-container {
  background-color: #333;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10vh;
  height: 90vh;
}
.box-course-content-left {
  padding: 20px;
  text-align: center;
  width: 90%;
}

.box-course-content-right {
  padding: 20px 0 0 100px;
  width: 50%;
}

.box-h1,
.box-h2 {
  color: #ff5733;
}

.box-ul .box-li {
  text-align: left;
}

.box-button {
  background-color: #ff5733; /* Orange rouge */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.box-button:hover {
  background-color: #c94c22; /* Orange rouge foncé */
}
</style>
