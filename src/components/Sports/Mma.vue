<template>
  <div class="page-container">
    <div class="mma-course-container">
      <div class="mma-course-content-left">
        <h1 class="mma-h1">Subscription du coufffrs de MMA</h1>
        <v-spacer></v-spacer>

        <p>
          Félicitations pour votre décision de rejoindre notre communauté MMA !
          Avec votre abonnement, vous obtenez bien plus qu'un simple accès aux
          cours. Voici ce que vous pouvez attendre de votre abonnement:
        </p>
        <v-spacer></v-spacer>

        <h2 class="mma-h2">Accès Illimité aux Installations :</h2>
        <ul class="mma-ul">
          <li class="mma-li">
            Profitez de nos installations de première classe, y compris les
            douches et le gymnase, pour vous préparer avant et après vos séances
            d'entraînement.
          </li>
          <h2 class="mma-h2">Casier Personnel :</h2>
          <li class="mma-li">
            Chaque abonné bénéficie d'un casier personnel sécurisé pour ranger
            vos affaires en toute tranquillité pendant que vous vous entraînez.
          </li>
          <h2 class="mma-h2">Utilisation de l'Équipement :</h2>
          <li class="mma-li">
            Utilisez notre équipement de qualité professionnelle pour vos
            entraînements, comprenant des sacs de frappe, des gants, des
            protège-tibias et bien plus encore.
          </li>
        </ul>
        <h2 class="mma-h2">Prix du cours :</h2>
        <p>Le cours de MMA est proposé au tarif mensuel de $50.</p>
        <v-spacer></v-spacer>
        <button class="mma-button" @click="subscribe">S'abonner</button>
      </div>
      <div class="mma-course-content-right">
        <SubsCard />
      </div>
    </div>
  </div>
</template>

<script>
import SubsCard from "../Subs-Card.vue";
export default {
  name: "Mma",
  mounted() {
    this.scrollToTop();
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
.mma-course-container {
  background-color: rgb(22, 22, 22);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10vh;
  height: 110vh;
}
.mma-course-card-left {
  border-radius: 15px;
  height: 100vh;
}

.mma-course-content-left {
  padding: 20px;
  text-align: center;
  width: 50%;
}

.mma-course-content-right {
  padding: 5% 0 0 10%;
  width: 50%;
}

.mma-h1,
.mma-h2 {
  color: #ff5733;
}

.mma-ul .mma-li {
  text-align: left;
}

.mma-button {
  background-color: #ff5733; /* Orange rouge */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.mma-button:hover {
  background-color: #c94c22; /* Orange rouge foncé */
}
</style>
