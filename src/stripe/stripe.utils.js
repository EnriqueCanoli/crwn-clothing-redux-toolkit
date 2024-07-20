import { loadStripe } from "@stripe/stripe-js";

//here we pass the public key
export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)