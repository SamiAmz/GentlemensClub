const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event) {
  const { sessionId } = JSON.parse(event.body);
  
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paymentDetails = {
      status: session.payment_status,
      amount: session.amount_total / 100, // Stripe amounts are in the smallest currency unit, like cents for USD
      expirationDate: calculateExpirationDate(), // Implement this according to your business logic
    };

    return {
      statusCode: 200,
      body: JSON.stringify(paymentDetails),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
function calculateExpirationDate() {
    const now = new Date();
    now.setMonth(now.getMonth() + 1);
    return now.toISOString().split('T')[0]; 
  }
  