
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = async (event) => {
    //when you sen me this event, I am going to make a payment intent to stripe
    try {
        //I need the currency and the payment method
        //the amount we pass in cents, so we we have a whole number. Ex 100.00 USD 10000
        const {amount} = JSON.parse(event.body);

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payments_method_types: ["card"]
        })

        return{
            statusCode: 200,
            body: JSON.stringify({
                paymentIntent
            })
        }

    } catch (error) {
        console.log({error})

        return{
            status: 400,
            body: JSON.stringify({error})
        }
    }
}