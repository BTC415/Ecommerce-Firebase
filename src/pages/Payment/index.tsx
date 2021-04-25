//importing stripe utils
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
//importing components
import PaymentDetails from '../../components/PaymentDetails';
//stripe init
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY!);
//payment
const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentDetails />
    </Elements>
  );
};

export default Payment;
