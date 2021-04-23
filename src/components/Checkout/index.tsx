//importing hooks
import { useTypedSelector, useCartActions } from '../../hooks';
import { selectCartItems } from '../../state';
import { createStructuredSelector } from 'reselect';
//importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';
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
        {cartItems.map(product => {
          //destructuring
          const { thumbnail, description, quantity, price } = product;
          return (
            <div className="product__checkout">
              <div className="thumbnail">
                <img src={thumbnail} alt="product-preview" />
              </div>
              <div className="description">{description}</div>
              <div className="quantity__container">
                <ul>
                  <li>-</li>
                  <li>{quantity}</li>
                  <li>+</li>
                </ul>
              </div>
              <div className="price">${price}</div>
              <div className="remove">
                <FontAwesomeIcon icon={faClosedCaptioning} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
