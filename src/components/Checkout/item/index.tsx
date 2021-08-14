//importing hooks
import { useCartActions } from '../../../hooks';
//importing types
import { ProductData } from '../../../interfaces';
//importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface CheckoutItemProps {
  product: ProductData;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ product }) => {
  const { removeCartItem, addCartItem, reduceCartItem } = useCartActions();
  const { thumbnail, description, quantity, price, documentId } = product;

  const handleRemoveCartItem = (documentId: string) =>
    removeCartItem(documentId);

  const handleReduceCartItem = (product: ProductData) =>
    reduceCartItem(product);

  const handleAddProduct = (product: ProductData) => addCartItem(product);

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
