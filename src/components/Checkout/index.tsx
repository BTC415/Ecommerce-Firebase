//importing hooks
import { useTypedSelector, useCartActions } from '../../hooks';
import { useHistory } from 'react-router-dom';
//importing types & selectors
import { selectCartItems, selectCartTotal } from '../../state';
import { ProductData } from '../../interfaces';
import { createStructuredSelector } from 'reselect';
//importing utils
import { showTwoNumbersAfterDecimal } from '../../Utils';
//importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
//importing components
import Button from '../Forms/Button';
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
  const { removeCartItem, addCartItem, reduceCartItem } = useCartActions();
  //on click handlers
  const handleRemoveCartItem = (documentId: string) => {
    removeCartItem(documentId);
  };
  const handleAddProduct = (product: ProductData) => {
    addCartItem(product);
  };
  const handleReduceCartItem = (product: ProductData) => {
    reduceCartItem(product);
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
                    <li
                      className="operator"
                      onClick={() => handleReduceCartItem(product)}
                    >
                      -
                    </li>
                    <li>{quantity}</li>
                    <li
                      className="operator"
                      onClick={() => handleAddProduct(product)}
                    >
                      +
                    </li>
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
            <h2>Total: ${showTwoNumbersAfterDecimal(total)}</h2>
          </div>
          <div className="call__to__actions">
            <Button onClick={() => history.goBack()}>Continue Shopping</Button>
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
