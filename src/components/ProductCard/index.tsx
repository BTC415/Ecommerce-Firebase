//importing hooks
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  useProductsActions,
  useTypedSelector,
  useCartActions,
} from '../../hooks/index';
//importing types
import { ProductData } from '../../state';
//importing components
import Button from '../Forms/Button';
//product card
const ProductCard = () => {
  //redux state, actions & router params
  const { productID } = useParams<{ productID: string }>();
  const { fetchProductStart, setProduct } = useProductsActions();
  const { addCartItem } = useCartActions();
  const { product } = useTypedSelector(state => state.productsData);
  //fetching product
  useEffect(() => {
    fetchProductStart(productID);
    //cleanup
    return () => {
      setProduct(null);
    };
  }, [fetchProductStart, productID, setProduct]);
  //type guards
  if (!product) return null;
  //destructuring
  const { name, price, thumbnail, description } = product;
  //config
  enum buttonConfig {
    type = 'button',
  }
  //on click handler
  const handleAddToCart = (product: ProductData) => {
    addCartItem(product);
  };
  return (
    <div className="product__card">
      <div className="product__hero">
        <img src={thumbnail} alt="product-preview" />
      </div>
      <div className="product__details">
        <div className="product__name">{name}</div>
        <div className="product__price">${price}</div>
        <span
          className="product__description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="add__to__cart">
        <Button {...buttonConfig} onClick={() => handleAddToCart(product)}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
