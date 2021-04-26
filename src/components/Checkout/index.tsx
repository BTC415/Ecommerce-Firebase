//importing hooks
import { useTypedSelector } from '../../hooks';
import { useHistory } from 'react-router-dom';
//importing types & selectors
import { selectCartItems, selectCartTotal } from '../../state';
import { createStructuredSelector } from 'reselect';
//importing utils
import { showTwoNumbersAfterDecimal } from '../../Utils';
import { v4 as uuidv4 } from 'uuid';
//importing components
import Button from '../Forms/Button';
import CheckoutItem from './item';
//checkout
const Checkout = () => {
  //redux actions & state, router utils
  const history = useHistory();
  const { cartItems, total } = useTypedSelector(
    createStructuredSelector({
      cartItems: selectCartItems,
      total: selectCartTotal,
    })
  );
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {cartItems.length > 0 ? (
        <div className="cart">
          {cartItems.map(product => {
            return <CheckoutItem product={product} key={uuidv4()} />;
          })}
          <div className="total">
            <h2>Total: ${showTwoNumbersAfterDecimal(total)}</h2>
          </div>
          <div className="call__to__actions">
            <Button onClick={() => history.goBack()}>Continue Shopping</Button>
            <Button onClick={() => history.push('/payment')}>Checkout</Button>
          </div>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </div>
  );
};

export default Checkout;
