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

    // Retrieve the session details from Stripe, expanding the subscription
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['subscription'],
    });

    // Check if the session has a subscription object and get the current_period_end
    let expirationDate;
    if (session.subscription) {
      expirationDate = session.subscription.current_period_end;
    } else {
      // Handle cases where there is no subscription object linked to the session
      console.error('No subscription found for this session');
      expirationDate = null; // or set a default value, or handle as needed
    }

    // Extract other necessary details from the session or subscription
    const amount = session.amount_total; // The total amount of the session
    const status = session.payment_status; // The payment status of the session
    // ... add logic to determine the 'type' or other properties if needed

    // Return the necessary session details to the client
    return {
      statusCode: 200,
      body: JSON.stringify({
        sessionId: session.id,
        expirationDate: expirationDate, // Unix timestamp of the period end
        amount: amount,
        status: status,
        type: "Boxe", // Assuming this is static or derived from somewhere else in your app
        // ... include any other fields you need to return
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
