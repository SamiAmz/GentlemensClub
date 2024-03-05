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
      if (sessionID) {
        await updateDatabaseWithSessionInfo(sessionID);
      }
    } else {
      console.error("No authenticated user found.");
    }
  });
});

    async function updateDatabaseWithSessionInfo(sessionId) {
  if (!auth.currentUser) {
    console.error("No authenticated user found.");
    return;
  }

  const userId = auth.currentUser.uid;

  const sessionDetails = await getSessionDetails(sessionId);
  console.log({
  userId: userId,
  sessionId: sessionId,
  date_expiration: sessionDetails.expirationDate,
  prix: sessionDetails.amount,
  status: sessionDetails.status,
  type: sessionDetails.type,
});
  try {
    const docRef = await addDoc(collection(db, "abonnement"), {
      userId: userId,
      sessionId: sessionId,
      date_expiration: sessionDetails.expirationDate,
      prix: sessionDetails.amount,
      status: sessionDetails.status,
      type: sessionDetails.type,
    });
    console.log("Firestore document added successfully. Document ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document to Firestore: ", e);
  }
}

async function getSessionDetails(sessionId) {
  console.log("Session Details:", sessionDetails);  // Make sure 'type' is included here and not undefined

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
      type: paymentDetails.courseType // Assuming the type is returned by the API
    };
  } catch (error) {
    console.error("Error fetching session details:", error);
    throw error; // Ensuring the calling function knows an error occurred
  }
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
