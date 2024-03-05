import { loadStripe } from '@stripe/stripe-js';
import { auth } from "@/firebase/init";

export async function subscribeToCourse(priceId, courseType) {
  const user = auth.currentUser;
  if (!user) {
    console.log("User not logged in, redirecting to login.");
    return;
  }

  console.log("Initiating subscription for:", courseType);

  const stripe = await loadStripe("pk_test_51Oo7T7IrFzdedmXM8bThRpjvZN9FYQ55vJDqyLB8hjQecqUaqh02iury7mpYN4Vjxyv4jvPoQUP6HTaASJY0SVou00AfuC8FGU");

  try {
    const response = await fetch("/.netlify/functions/create-checkout-sessions", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId: priceId, courseType: "boxe" }), // Pass courseType here
    });

    
    const session = await response.json();
    if (response.ok && session.sessionId) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.sessionId
      });
      if (error) {
        console.error("Stripe checkout error:", error.message);
      }
    } else {
      console.error("Failed to initiate Stripe checkout:", session.error);
    }
  } catch (error) {
    console.error("Error during subscription process:", error);
  }
}
