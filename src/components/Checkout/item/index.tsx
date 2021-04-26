//importing hooks
import { useCartActions } from '../../../hooks';
//importing types
import { ProductData } from '../../../interfaces';
//importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
//props interface
interface CheckoutItemProps {
  product: ProductData;
}
//checkout item
const CheckoutItem: React.FC<CheckoutItemProps> = ({ product }) => {
  //redux actions
  const { removeCartItem, addCartItem, reduceCartItem } = useCartActions();
  //destructuring
  const { thumbnail, description, quantity, price, documentId } = product;
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
          <li className="operator" onClick={() => handleAddProduct(product)}>
            +
          </li>
        </ul>
      </div>
      <div className="price">${price}</div>
      <div className="remove" onClick={() => handleRemoveCartItem(documentId!)}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  );
};

export default CheckoutItem;
