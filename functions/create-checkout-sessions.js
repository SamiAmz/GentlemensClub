const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event) {
  console.log("Received event:", event); // Log the incoming event

  if (event.httpMethod !== 'POST') {
    console.log("Method Not Allowed");
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    console.log("Parsing body:", event.body);
    const { priceId } = JSON.parse(event.body);
    console.log("Received priceId:", priceId); // Log the received priceId

    console.log("Creating Stripe Checkout Session");
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: `${process.env.SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.SITE_URL}`,
    });

    console.log("Session created:", session.id); // Log the session ID
    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error) {
    console.error("Error creating session:", error); // Log any errors
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
