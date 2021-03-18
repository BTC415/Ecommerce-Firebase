//importing random id's
import { v4 as uuidv4 } from 'uuid';
//props interface
interface ProductProps {
  name: string;
  price: number;
  thumbnail: string;
}
//product component
const Product: React.FC<ProductProps> = ({ name, price, thumbnail }) => {
  return (
    <div className="product__item" key={uuidv4()}>
      <div className="product__name">{name}</div>
      <div className="product__price">{price}</div>
    </div>
  );
};

export default Product;
