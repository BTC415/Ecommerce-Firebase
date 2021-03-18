//importing hooks & random id's
import { useEffect } from 'react';
import { useProductsActions, useTypedSelector } from '../../hooks';
import Product from './Product';
//products component
const ProductResults: React.FC = () => {
  //redux state & actions
  const { fetchProductsStart } = useProductsActions();
  const { products } = useTypedSelector(state => state.productsData);

  //fetching products
  useEffect(() => {
    fetchProductsStart();
  }, [fetchProductsStart]);
  //type guards
  if (!Array.isArray(products)) return null;

  if (products.length < 1) {
    return (
      <div className="products">
        <p>No search results. Please make sure there are products.</p>
      </div>
    );
  }
  return (
    <div className="products">
      <h1>Browse Products</h1>
      {products.map(product => {
        //destructuring
        const { name, price, thumbnail } = product;
        //config
        const productConfig = {
          name,
          price,
          thumbnail,
        };
        return <Product {...productConfig} />;
      })}
    </div>
  );
};

export default ProductResults;
