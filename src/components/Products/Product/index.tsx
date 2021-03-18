//importing components
import Button from '../../Forms/Button';
//props interface
interface ProductProps {
  name: string;
  price: number;
  thumbnail: string;
}
//product component
const Product: React.FC<ProductProps> = ({ name, price, thumbnail }) => {
  return (
    <div className="product__item">
      <div className="img__container">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="text__content">
        <div className="product__name">{name}</div>
        <div className="product__price">${price}</div>
      </div>
      <div className="add__to__cart">
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};

export default Product;
