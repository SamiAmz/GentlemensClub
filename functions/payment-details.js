const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    console.error('Request not POST, method not allowed');
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { sessionId } = JSON.parse(event.body); // Extract sessionId from the request body

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['subscription'],
    });

    let expirationDate;
    let readableExpirationDate = null;
    if (session.subscription) {
      expirationDate = session.subscription.current_period_end * 1000; // Convert to milliseconds
      readableExpirationDate = new Date(expirationDate).toISOString().split('T')[0];
    } else {
      console.error('No subscription found for this session');
      expirationDate = null;
    }

    const amount = session.amount_total;
    const status = session.payment_status;
    let activeStatus = 'inactive';

    if (status === "paid") {
      activeStatus = 'active';
    }

    // Access courseType from the session's metadata
    const courseType = session.metadata ? session.metadata.courseType : null;

    return {
      statusCode: 200,
      body: JSON.stringify({
        sessionId: session.id,
        expirationDate: readableExpirationDate,
        amount: amount,
        status: status,
        activeStatus: activeStatus,
        type: courseType,
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
