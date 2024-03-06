<template>
  <h1 class="box-h1">Subscription du cours de Box</h1>
  <v-spacer></v-spacer>

  <p>
    Félicitations pour votre décision de rejoindre notre communauté Box ! Avec
    votre abonnement, vous obtenez bien plus qu'un simple accès aux cours. Voici
    ce que vous pouvez attendre de votre abonnement:
  </p>
  <v-spacer></v-spacer>

  <h2 class="box-h2">Accès Illimité aux Installations :</h2>
  <ul class="box-ul">
    <li class="box-li">
      Profitez de nos installations de première classe, y compris les douches et
      le gymnase, pour vous préparer avant et après vos séances d'entraînement.
    </li>
    <h2 class="box-h2">Casier Personnel :</h2>
    <li class="box-li">
      Chaque abonné bénéficie d'un casier personnel sécurisé pour ranger vos
      affaires en toute tranquillité pendant que vous vous entraînez.
    </li>
    <h2 class="box-h2">Utilisation de l'Équipement :</h2>
    <li class="box-li">
      Utilisez notre équipement de qualité professionnelle pour vos
      entraînements, comprenant des sacs de frappe, des gants, des
      protège-tibias et bien plus encore.
    </li>
  </ul>
</template>

<script>
export default {
  name: "Box",
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

.box-h1,
.box-h2 {
  color: #ff5733;
}

.box-ul .box-li {
  text-align: left;
}

</style>
