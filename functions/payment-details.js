// Require the Stripe library
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    console.log('Request not POST, method not allowed');
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { priceId } = JSON.parse(event.body);
  console.log('Received priceId:', priceId); // Log the received priceId

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: `${process.env.URL}/success?session_id={CHECKOUT_SESSION_ID}`, 
      cancel_url: process.env.URL, 
    });

    console.log('Session created with ID:', session.id); // Log the created session ID

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error) {
    console.error('Error creating checkout session:', error); // Log the error
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
