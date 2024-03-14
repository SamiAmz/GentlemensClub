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
    let activeStatus = 'inactive'; // Assume inactive by default

    if(status === "paid" ) {
      activeStatus = 'active'; // Mark as active if paid
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        sessionId: session.id,
        expirationDate: readableExpirationDate, // Use the formatted date
        amount: amount,
        status: status,
        activeStatus: activeStatus, // Include active status in the response
        type: courseType, // Set the subscription type to the received courseType
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
