<template>
  <div class="page-container">
    <div class="mma-course-container">
      <div class="mma-course-card-left">
        <div class="mma-course-content-left">
          <h1>Subscription du coufffrs de MMA</h1>
          <v-spacer></v-spacer>

          <p>
            Félicitations pour votre décision de rejoindre notre communauté MMA
            ! Avec votre abonnement, vous obtenez bien plus qu'un simple accès
            aux cours. Voici ce que vous pouvez attendre de votre abonnement:
          </p>
          <v-spacer></v-spacer>

          <h2>Accès Illimité aux Installations :</h2>
          <ul>
            <li>
              Profitez de nos installations de première classe, y compris les
              douches et le gymnase, pour vous préparer avant et après vos
              séances d'entraînement.
            </li>
            <h2>Casier Personnel :</h2>
            <li>
              Chaque abonné bénéficie d'un casier personnel sécurisé pour ranger
              vos affaires en toute tranquillité pendant que vous vous
              entraînez.
            </li>
            <h2>Utilisation de l'Équipement :</h2>
            <li>
              Utilisez notre équipement de qualité professionnelle pour vos
              entraînements, comprenant des sacs de frappe, des gants, des
              protège-tibias et bien plus encore.
            </li>
          </ul>
          <h2>Prix du cours :</h2>
          <p>Le cours de MMA est proposé au tarif mensuel de $50.</p>
          <v-spacer></v-spacer>
          <button @click="subscribe">S'abonner</button>
        </div>
      </div>
      <div class="mma-course-card-right">
        <div class="mma-course-content-right">
          <h1>Bienvenue au cours de MMA</h1>
          <v-spacer></v-spacer>

          <p>
            Le MMA (Mixed Martial Arts) est un sport de combat complet qui
            combine plusieurs disciplines, notamment la boxe, le jiu-jitsu
            brésilien, le muay thaï et la lutte.
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
  </div>
</template>

<script>
import { auth, db } from "@/firebase/init"; // Assuming db is exported from here
import router from "@/router";
import { loadStripe } from '@stripe/stripe-js'; // Ensure you have this installed and imported

export default {
  name: "Mma",
  mounted() {
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    async subscribe() {
      const user = auth.currentUser;
      if (!user) {
        router.push({ name: 'login' });
        return;
      }

      const stripePromise = loadStripe("pk_test_51Oo7T7IrFzdedmXM8bThRpjvZN9FYQ55vJDqyLB8hjQecqUaqh02iury7mpYN4Vjxyv4jvPoQUP6HTaASJY0SVou00AfuC8FGU"); // Replace with your Stripe publishable key

      try {
        const response = await fetch("/.netlify/functions/create-checkout-sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ priceId: "price_1Oo7gBIrFzdedmXMi51ZvYJ1" }),
        });

        const { sessionId } = await response.json();

        if (!sessionId) {
          throw new Error("Session ID is missing in the response");
        }

        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({ sessionId });

        if (error) {
          console.error("Stripe checkout error:", error.message);
          return;
        }

        // Retrieve payment details from Netlify Function
        const paymentDetailsResponse = await fetch('/.netlify/functions/payment-details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sessionId }),
        });

        if (!paymentDetailsResponse.ok) {
          throw new Error("Error retrieving payment details.");
        }

        const paymentDetails = await paymentDetailsResponse.json();

        console.log("Attempting to add subscription:", {
  userId: user.uid,
  sessionId: sessionId,
  date_expiration: paymentDetails.expirationDate,
  prix: paymentDetails.amount,
  status: paymentDetails.status,
  type: "Boxe",
});
        // Update Firestore with the payment details
        db.collection('abonnement').add({
  userId: user.uid,
  sessionId: sessionId,
  date_expiration: paymentDetails.expirationDate,
  prix: paymentDetails.amount,
  status: paymentDetails.status,
  type: "Boxe",
}).then(docRef => {
  console.log("Subscription document successfully added with ID:", docRef.id);
}).catch(error => {
  console.error("Error adding subscription document to Firestore:", error);
});

        
      } catch (error) {
        console.error("Subscription error:", error);
        // Handle other errors
      }
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
