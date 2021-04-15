//importing hooks
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsActions, useTypedSelector } from '../../hooks/index';
import Button from '../Forms/Button';
//product card
const ProductCard = () => {
  //redux state, actions & router params
  const { productID } = useParams<{ productID: string }>();
  const { fetchProductStart } = useProductsActions();
  const { product } = useTypedSelector(state => state.productsData);
  //fetching product
  useEffect(() => {
    fetchProductStart(productID);
  }, [fetchProductStart, productID]);
  //type guards
  if (!product) return null;
  //destructuring
  const { name, price, thumbnail } = product;
  //config
  enum buttonConfig {
    type = 'button',
  }
  return (
    <div className="product__card">
      <div className="product__hero">
        <img src={thumbnail} alt="product-preview" />
      </div>
      <div className="product__details">
        <div className="product__name">{name}</div>
        <div className="product__price">${price}</div>
      </div>
      <div className="add__to__cart">
        <Button {...buttonConfig}>Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
