<template>
    <div class="success-page">
      <h1>Merci pour votre achat!</h1>
      <RouterLink to="/" class="hover-link">
        <v-text>Retour à l'accueil</v-text>
      </RouterLink>
      
    </div>
  </template>
  
  <script>
  import { auth, db } from "@/firebase/init";
  import { onMounted, ref } from "vue";
  import { collection, addDoc } from "firebase/firestore"; 
  import { onAuthStateChanged } from "firebase/auth";
  
  export default {
    name: "Success",
    setup() {
      const sessionId = ref(null);
  
      async function getSessionDetails(sessionId, courseType) {
        try {
          const response = await fetch('/.netlify/functions/payment-details', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sessionId: sessionId, courseType: courseType }), // Include courseType in the request body
          });
  
          if (!response.ok) {
            throw new Error(`Failed to fetch session details: ${response.statusText}`);
          }
  
          const paymentDetails = await response.json();
          console.log(paymentDetails);
  
          return {
            expirationDate: paymentDetails.expirationDate,
            amount: paymentDetails.amount,
            status: paymentDetails.status,
            courseType: paymentDetails.courseType,
          };
        } catch (error) {
          console.error("Error fetching session details:", error);
          throw error;
        }
      }
  
      async function updateDatabaseWithSessionInfo(sessionId, courseType) {
        if (!auth.currentUser) {
          console.error("No authenticated user found.");
          return;
        }
  
        const userId = auth.currentUser.uid;
  
        const sessionDetails = await getSessionDetails(sessionId, courseType);
        console.log({
          userId: userId,
          sessionId: sessionId,
          date_expiration: sessionDetails.expirationDate,
          prix: sessionDetails.amount,
          status: sessionDetails.status,
          courseType: sessionDetails.courseType,
        });
  
        try {
          const docRef = await addDoc(collection(db, "abonnement"), {
            userId: userId,
            sessionId: sessionId,
            date_expiration: sessionDetails.expirationDate,
            prix: sessionDetails.amount,
            status: sessionDetails.status,
            courseType: courseType,
          });
          console.log("Firestore document added successfully. Document ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document to Firestore: ", e);
        }
      }
  
      onMounted(() => {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const query = new URLSearchParams(window.location.search);
            const sessionID = query.get("session_id");
            const courseType = query.get("course_type"); // Extract courseType from URL
            if (sessionID) {
              await updateDatabaseWithSessionInfo(sessionID, courseType);
            }
          } else {
            console.error("No authenticated user found.");
          }
        });
      });
    }
  };
  </script>
  
  <style scoped>
  .hover-link v-text:hover {
    color: rgb(255, 91, 8);
  }
  .success-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  /* Add more styles as needed */
  </style>