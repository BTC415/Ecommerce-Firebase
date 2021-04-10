//importing router utils
import { Link } from 'react-router-dom';
//importing components
import Button from '../../Forms/Button';
//props interface
interface ProductProps {
  name: string;
  price: number;
  thumbnail: string;
  documentId?: string;
}
//product component
const Product: React.FC<ProductProps> = ({
  name,
  price,
  thumbnail,
  documentId,
}) => {
  //type guards
  if (!documentId) return null;
  //config
  enum buttonConfig {
    type = 'button',
  }
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
        <Button {...buttonConfig}>Add to cart</Button>
      </div>
    </div>
  );
};

export default Product;
