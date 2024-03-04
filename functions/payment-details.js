// Import any necessary modules or configurations
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    console.error('Request not POST, method not allowed');
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Extract the price ID and course type from the request body
    const { priceId, courseType } = JSON.parse(event.body);
    console.log('Received priceId:', priceId); // Log the received priceId for debugging
    console.log('Received courseType:', courseType); // Log the received courseType for debugging

    // Create the Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://example.com/cancel',
      // Pass the courseType in the metadata
      metadata: {
        courseType: courseType
      }
    });

    // Return the necessary session details to the client
    return {
      statusCode: 200,
      body: JSON.stringify({
        sessionId: session.id,
        // Add any other necessary fields here
      }),
    };
  } catch (error) {
    console.error('Error creating checkout session:', error); // Log the error for debugging
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
