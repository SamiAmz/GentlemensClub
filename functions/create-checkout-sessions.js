exports.handler = async function(event) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }
  
    try {
      // Extract the base URL from the Referer header
      const refererUrl = new URL(event.headers.referer);
      const baseUrl = `${refererUrl.protocol}//${refererUrl.host}`;
  
      // Log for debugging
      console.log('Event body:', event.body);
  
      // Extract both priceId and courseType from the request body
      const { priceId, courseType } = JSON.parse(event.body);
      
      // Log courseType for debugging
      console.log("Received courseType:", courseType);
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          price: priceId,
          quantity: 1,
        }],
        mode: 'subscription',
        success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&course_type=${courseType}`, // Append courseType here
        cancel_url: `${baseUrl}/cancel`,
    });
    
  
      return {
        statusCode: 200,
        body: JSON.stringify({ sessionId: session.id, courseType: courseType}),
      };
    } catch (error) {
      console.error('Stripe error:', error); // Log the full error
  
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  };
  