// Require the Stripe library
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    console.error('Request not POST, method not allowed');
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Extract the session ID from the request body
    const { sessionId } = JSON.parse(event.body);
    console.log('Received sessionId:', sessionId); // Log the received sessionId for debugging

    // Retrieve the session details from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    console.log('Session details retrieved:', session); // Optional: Log the session details for debugging

    // Return the necessary session details to the client
    return {
      statusCode: 200,
      body: JSON.stringify({
        sessionId: session.id,
        // Include any other session details you need
        // You might want to extract specific details from the session object to return to the client
      }),
    };
  } catch (error) {
    console.error('Error retrieving checkout session:', error); // Log the error for debugging
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
