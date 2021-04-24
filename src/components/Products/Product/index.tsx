//importing hooks
import { useCartActions } from '../../../hooks';
import { useHistory } from 'react-router-dom';
//importing utils
import { Link } from 'react-router-dom';
//importing types
import { ProductData } from '../../../state';
//importing components
import Button from '../../Forms/Button';
//props interface
interface ProductProps {
  product: ProductData;
}
//product component
const Product: React.FC<ProductProps> = ({ product }) => {
  //redux actions & router history
  const { addCartItem } = useCartActions();
  const history = useHistory();
  //destructuring
  const { name, price, thumbnail, documentId } = product;
  //type guards
  if (!documentId) return null;
  //config
  enum buttonConfig {
    type = 'button',
  }
  //on click handler
  const handleAddToCart = (product: ProductData) => {
    addCartItem(product);
    history.push('/cart');
  };
  return (
    <div className="product__item">
      <div className="img__container">
        <Link to={`/product/${documentId}`}>
          <img src={thumbnail} alt={name} />
        </Link>
      </div>
      <div className="text__content">
        <Link to={`/product/${documentId}`}>
          <div className="product__name">{name}</div>
        </Link>
        <div className="product__price">${price}</div>
      </div>
      <div className="add__to__cart">
        <Button {...buttonConfig} onClick={() => handleAddToCart(product)}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
