exports.handler = async function(event) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
      // Extract the base URL from the Referer header
      const refererUrl = new URL(event.headers.referer);
      const baseUrl = `${refererUrl.protocol}//${refererUrl.host}`;
      console.log('Event body:', event.body);

      const { priceId } = JSON.parse(event.body);
      const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [{
              price:'price_1Oo7gBIrFzdedmXMi51ZvYJ1',
              quantity: 1,
          }],
          mode: 'subscription',
          success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${baseUrl}/cancel`,
      });

      return {
          statusCode: 200,
          body: JSON.stringify({ sessionId: session.id }),
      };
  } catch (error) {
      return {
          statusCode: 500,
          body: JSON.stringify({ error: error.message }),
      };
  }
};
