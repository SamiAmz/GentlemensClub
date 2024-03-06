<template>
  <div class="page-container">
    <div class="wrestling-course-container">
      <div class="wrestling-course-content-left">
        <h1 class="wrestling-h1">Subscription du cours de Wrestling</h1>
        <v-spacer></v-spacer>

        <p>
          Félicitations pour votre décision de rejoindre notre communauté
          Wrestling ! Avec votre abonnement, vous obtenez bien plus qu'un simple
          accès aux cours. Voici ce que vous pouvez attendre de votre
          abonnement:
        </p>
        <v-spacer></v-spacer>

        <h2 class="wrestling-h2">Accès Illimité aux Installations :</h2>
        <ul class="wrestling-ul">
          <li class="wrestling-li">
            Profitez de nos installations de première classe, y compris les
            douches et le gymnase, pour vous préparer avant et après vos séances
            d'entraînement.
          </li>
          <h2 class="wrestling-h2">Casier Personnel :</h2>
          <li class="wrestling-li">
            Chaque abonné bénéficie d'un casier personnel sécurisé pour ranger
            vos affaires en toute tranquillité pendant que vous vous entraînez.
          </li>
          <h2 class="wrestling-h2">Utilisation de l'Équipement :</h2>
          <li class="wrestling-li">
            Utilisez notre équipement de qualité professionnelle pour vos
            entraînements, comprenant des sacs de frappe, des gants, des
            protège-tibias et bien plus encore.
          </li>
        </ul>
      </div>
      <div class="wrestling-course-content-right">
        <SubsCard />
      </div>
    </div>
  </template>
  
  <script>
    import { subscribeToCourse } from './subscribe.js';
  export default {
    import: "https://unicons.iconscout.com/release/v3.0.6/css/line.css",
    name: "Mma",
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
  .page-container {
    background-color: rgb(79, 79, 80);
    margin-top: 10vh;
    padding-top: 1vh;
    padding-bottom: 50px;
  }
  .mma-course-container {
    background-color: rgb(31, 31, 31);
    display: flex;
    flex: 1;
    margin-left: 10vh;
    align-items: center;
    height: 110vh;
    border: 2px solid black;
    width: 90%;
    border-radius: 15px;
  }
  
  .mma-course-card-right {
    background-color: #2c3e50; /* Couleur de fond de la carte */
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-left: 25px;
    margin-right: 25px;
    border: 2px solid black;
  }
  .mma-course-card-left {
    border-radius: 15px;
    margin: 0 25px 15px 25px;
    height: 100vh;
  }
  
  .mma-course-content-right {
    padding: 20px;
    text-align: center;
  }
  .mma-course-content-left {
    padding: 20px;
    text-align: center;
  }
  
  h1,
  h2 {
    color: #ff5733;
  }
  
  ul li {
    text-align: left;
  }
  
  button {
    background-color: #ff5733; /* Orange rouge */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #c94c22; /* Orange rouge foncé */
  }
  </style>
  
