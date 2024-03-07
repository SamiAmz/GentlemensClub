<template>
  <h1 class="mma-h1">Subscription du cours de MMA</h1>
  <v-spacer></v-spacer>

  <p>
    Félicitations pour votre décision de rejoindre notre communauté MMA ! Avec
    votre abonnement, vous obtenez bien plus qu'un simple accès aux cours. Voici
    ce que vous pouvez attendre de votre abonnement:
  </p>
  <v-spacer></v-spacer>

  <h2 class="mma-h2">Accès Illimité aux Installations :</h2>
  <ul class="mma-ul">
    <li class="mma-li">
      Profitez de nos installations de première classe, y compris les douches et
      le gymnase, pour vous préparer avant et après vos séances d'entraînement.
    </li>
    <h2 class="mma-h2">Casier Personnel :</h2>
    <li class="mma-li">
      Chaque abonné bénéficie d'un casier personnel sécurisé pour ranger vos
      affaires en toute tranquillité pendant que vous vous entraînez.
    </li>
    <h2 class="mma-h2">Utilisation de l'Équipement :</h2>
    <li class="mma-li">
      Utilisez notre équipement de qualité professionnelle pour vos
      entraînements, comprenant des sacs de frappe, des gants, des
      protège-tibias et bien plus encore.
    </li>
  </ul>
</template>

<script>
export default {
  name: "Mma",
  mounted() {
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.v-spacer {
  margin-top: 20px;
}
.mma-h1,
.mma-h2 {
  color: #ff5733;
}

.mma-ul .mma-li {
  text-align: left;
}
</style>
