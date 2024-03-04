const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    console.error('Request not POST, method not allowed');
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { sessionId, courseType } = JSON.parse(event.body); // Extract courseType from the request body

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['subscription'],
    });

    let expirationDate;
    if (session.subscription) {
      expirationDate = session.subscription.current_period_end;
    } else {
      console.error('No subscription found for this session');
      expirationDate = null;
    }

    const amount = session.amount_total;
    const status = session.payment_status;
    console.log("Received courseTfype:", courseType);

    return {
      statusCode: 200,
      body: JSON.stringify({
       sessionId: session.id,
        // Add any other necessary fields here
      }),
    };
  } catch (error) {
    console.error('Error retrieving checkout session:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
