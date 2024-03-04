// subscriptionService.js
import { loadStripe } from '@stripe/stripe-js';
import { auth } from "@/firebase/init";

// This function initiates the subscription process
export async function subscribeToCourse(priceId, courseType) {
  // Check if the user is logged in
  const user = auth.currentUser;
  if (!user) {
    console.log("User not logged in, redirecting to login.");
    // Redirect to login or show a message prompting to log in
    return;
  }

  console.log("Initiating subscription for:", courseType);

  // Initialize Stripe
  const stripe = await loadStripe("your-publishable-stripe-key");

  // Fetch the checkout session
  const response = await fetch("/.netlify/functions/create-checkout-sessions", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId: priceId }),
  });

  const session = await response.json();
  if (response.ok && session.sessionId) {
    // Redirect to checkout
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.sessionId
    });
    if (error) {
      console.error("Stripe checkout error:", error.message);
    }
  } else {
    console.error("Failed to initiate Stripe checkout:", session.error);
  }
}
