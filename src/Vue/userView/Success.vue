<template>
    <div class="success-page">
      <h1>Thank You for Your Purchase!</h1>
      <p>Your subscription has been processed successfully.</p>
      <!-- You can add more user feedback here -->
    </div>
  </template>
  
  <script>
  import { auth, db } from "@/firebase/init";
  import { onMounted, ref } from 'vue';
  
  export default {
    name: "Success",
    setup() {
      const sessionId = ref(null);
  
      onMounted(async () => {
        // Extract the session ID from the URL query parameters
        const query = new URLSearchParams(window.location.search);
        sessionId.value = query.get("session_id");
  
        if (sessionId.value) {
          await updateDatabaseWithSessionInfo();
        }
      });
  
      async function updateDatabaseWithSessionInfo() {
        try {
          // Retrieve the session details from your backend or Stripe
          const sessionDetails = await getSessionDetails(sessionId.value);
  
          const { userId, expirationDate, amount, status, type } = sessionDetails;

        // Ensure the user is logged in
        const user = auth.currentUser;
        if (!user) {
          console.error("User not logged in.");
          return;
        }

        // Add the subscription details to Firestore
        await db.collection("abonnement").add({
          userId: user.uid,
          sessionId: sessionId.value,
          date_expiration: expirationDate,
          prix: amount,
          status: status,
          type: type,
        });

        console.log("Firestore document added successfully.");
      } catch (error) {
        console.error("Error updating the database: ", error);
      }
    }

    async function getSessionDetails(sessionId) {
      try {
        // Implement a call to your server to retrieve session details from Stripe
        const response = await fetch(`/api/getSessionDetails?sessionId=${sessionId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch session details");
        }
        const sessionDetails = await response.json();
        return sessionDetails;
      } catch (error) {
        console.error("Error fetching session details:", error);
        return null; // or appropriate error handling
      }
    }

    return { sessionId, updateDatabaseWithSessionInfo, getSessionDetails };
  },
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
  