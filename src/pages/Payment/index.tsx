//importing stripe utils
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { publishableKey } from '../../stripe/config';
//importing components
import PaymentDetails from '../../components/PaymentDetails';
//stripe init
const stripePromise = loadStripe(publishableKey);
//payment
const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentDetails />
    </Elements>
  );
};

export default Payment;
