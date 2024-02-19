<template>
  <div class="mma-course-container">
    <div class="mma-course-card">
      <div class="mma-course-content">
        <h1>Bienvenue au cours de MMA</h1>
        <v-spacer></v-spacer>

        <p>
          Le MMA (Mixed Martial Arts) est un sport de combat complet qui combine
          plusieurs disciplines, notamment la boxe, le jiu-jitsu brésilien, le
          muay thaï et la lutte.
        </p>
        <v-spacer></v-spacer>

        <h2>Aperçu du cours :</h2>
        <ul>
          <li>
            Entraînements intensifs pour améliorer la force, la flexibilité et
            l'endurance
          </li>
          <li>
            Techniques de combat avancées enseignées par des instructeurs
            expérimentés
          </li>
          <li>Renforcement de la confiance en soi et de la discipline</li>
        </ul>
        <h2>Prix du cours :</h2>
        <p>Le cours de MMA est proposé au tarif mensuel de $50.</p>
        <v-spacer></v-spacer>
        <button @click="subscribe">S'abonner</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sports",
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
.mma-course-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.mma-course-card {
  background-color: #2c3e50; /* Couleur de fond de la carte */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 90%;
}

.mma-course-content {
  padding: 20px;
  text-align: center;
}

h1,
h2 {
  color: #ff5733; /* Orange rouge */
}

ul {
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
