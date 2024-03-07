<template>
  <h1 class="wrestling-h1">Subscription du cours de Wrestling</h1>
  <v-spacer></v-spacer>

  <p>
    Félicitations pour votre décision de rejoindre notre communauté Wrestling !
    Avec votre abonnement, vous obtenez bien plus qu'un simple accès aux cours.
    Voici ce que vous pouvez attendre de votre abonnement:
  </p>
  <v-spacer></v-spacer>

  <h2 class="wrestling-h2">Accès Illimité aux Installations :</h2>
  <ul class="wrestling-ul">
    <li class="wrestling-li">
      Profitez de nos installations de première classe, y compris les douches et
      le gymnase, pour vous préparer avant et après vos séances d'entraînement.
    </li>
    <h2 class="wrestling-h2">Casier Personnel :</h2>
    <li class="wrestling-li">
      Chaque abonné bénéficie d'un casier personnel sécurisé pour ranger vos
      affaires en toute tranquillité pendant que vous vous entraînez.
    </li>
    <h2 class="wrestling-h2">Utilisation de l'Équipement :</h2>
    <li class="wrestling-li">
      Utilisez notre équipement de qualité professionnelle pour vos
      entraînements, comprenant des sacs de frappe, des gants, des
      protège-tibias et bien plus encore.
    </li>
  </ul>
</template>

<script>
export default {
  name: "Wrestling",
  mounted() {
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    subscribe() {
      const priceId = "price_1Oo7gUIrFzdedmXM5qvSEOEu"; 
      const courseType = "Wrestling"; 
      subscribeToCourse(priceId, courseType);
      },
  },
};
</script>

<style scoped>
.v-spacer {
  margin-top: 20px;
}
.wrestling-h1,
.wrestling-h2 {
  color: #ff5733;
}

.wrestling-ul .wrestling-li {
  text-align: left;
}
</style>
