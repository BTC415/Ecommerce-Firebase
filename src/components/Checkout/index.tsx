//importing hooks
import { useTypedSelector, useCartActions } from '../../hooks';
import { selectCartItems } from '../../state';
import { createStructuredSelector } from 'reselect';
//checkout
const Checkout = () => {
  //redux actions & state
  const { cartItems } = useTypedSelector(
    createStructuredSelector({
      cartItems: selectCartItems,
    })
  );
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="cart">
        {cartItems.map(item => {
          console.log(item);
          return item;
        })}
      </div>
    </div>
  );
};

export default Checkout;
