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
  import { onMounted } from "vue";
  import { collection, addDoc } from "firebase/firestore"; 
  import { onAuthStateChanged } from "firebase/auth";
  
  export default {
    name: "Success",
    setup() {
      onMounted(() => {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const query = new URLSearchParams(window.location.search);
            const sessionId = query.get("session_id");
            const courseType = query.get("courseType"); 
  
            if (sessionId) {
              const sessionDetails = await getSessionDetails(sessionId);
              await updateDatabaseWithSessionInfo(sessionId, courseType, sessionDetails);
            } else {
              console.error("Session ID not found in URL parameters.");
            }
          } else {
            console.error("No authenticated user found.");
          }
        });
      });
  
      async function getSessionDetails(sessionId) {
        try {
          const response = await fetch('/.netlify/functions/payment-details', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sessionId: sessionId }),
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
          };
        } catch (error) {
          console.error("Error fetching session details:", error);
          throw error;
        }
      }
  
      async function updateDatabaseWithSessionInfo(sessionId, courseType, sessionDetails) {
        const userId = auth.currentUser.uid;
        console.log({
          userId: userId,
          sessionId: sessionId,
          date_expiration: sessionDetails.expirationDate,
          prix: sessionDetails.amount,
          status: sessionDetails.status,
          courseType: courseType,
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
  
  </style>