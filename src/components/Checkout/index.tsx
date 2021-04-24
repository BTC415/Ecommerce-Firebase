//importing hooks & types
import { useTypedSelector, useCartActions } from '../../hooks';
import { selectCartItems } from '../../state';
import { createStructuredSelector } from 'reselect';
//importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
//importing components
import Button from '../Forms/Button';
//checkout
const Checkout = () => {
  //redux actions & state
  const { cartItems } = useTypedSelector(
    createStructuredSelector({
      cartItems: selectCartItems,
    })
  );
  const { removeCartItem } = useCartActions();
  //on click handler
  const handleRemoveCartItem = (documentId: string) => {
    removeCartItem(documentId);
  };
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {cartItems.length > 0 ? (
        <div className="cart">
          {cartItems.map(product => {
            //destructuring
            const {
              thumbnail,
              description,
              quantity,
              price,
              documentId,
            } = product;
            return (
              <div className="product__checkout">
                <div className="thumbnail">
                  <img src={thumbnail} alt="product-preview" />
                </div>
                <div className="description">{description}</div>
                <div className="quantity__container">
                  <ul>
                    <li className="operator">-</li>
                    <li>{quantity}</li>
                    <li className="operator">+</li>
                  </ul>
                </div>
                <div className="price">${price}</div>
                <div
                  className="remove"
                  onClick={() => handleRemoveCartItem(documentId!)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              </div>
            );
          })}
          <div className="total">
            <h2>Total: $0</h2>
          </div>
          <div className="call__to__actions">
            <Button>Continue Shopping</Button>
            <Button>Checkout</Button>
          </div>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </div>
  );
};

export default Checkout;
