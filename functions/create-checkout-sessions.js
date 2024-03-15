exports.handler = async function(event) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const refererUrl = new URL(event.headers.referer);
        const baseUrl = `${refererUrl.protocol}//${refererUrl.host}`;
        console.log('Event body:', event.body);

        const { priceId, courseType } = JSON.parse(event.body);
        
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price: priceId,
                quantity: 1,
            }],
            mode: 'subscription',
            success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${baseUrl}/cancel`,
            metadata: { courseType: courseType },
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ sessionId: session.id, courseType: courseType }),
        };
    } catch (error) {
        console.error('Stripe error:', error); 

        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
