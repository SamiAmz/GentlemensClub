<template>
  <div class="success-page">
    <h1>Thank You for Your Purchase!</h1>
    <p>Your subscription has been processed successfully.</p>
    <!-- You can add more user feedback here -->
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

    async function updateDatabaseWithSessionInfo(sessionId, courseType) { // Make sure to accept courseType as a parameter
      if (!auth.currentUser) {
        console.error("No authenticated user found.");
        return;
      }

      const userId = auth.currentUser.uid;

      // Assume getSessionDetails can now accept and handle courseType
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
          courseType: courseType, // Use the extracted courseType
        });
        console.log("Firestore document added successfully. Document ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document to Firestore: ", e);
      }
    }

    // Adjust getSessionDetails if necessary to handle courseType
    async function getSessionDetails(sessionId, courseType) {
      // Function implementation
    }
  }
};
</script>


<style scoped>
.success-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* Add more styles as needed */
</style>
