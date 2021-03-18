//importing hooks & random id's
import { useEffect } from 'react';
import { useProductsActions, useTypedSelector } from '../../hooks';
import Product from './Product';
import { v4 as uuidv4 } from 'uuid';
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
    <div className="products" key={uuidv4()}>
      <h1>Browse Products</h1>
      <div className="products__grid">
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
    </div>
  );
};

export default ProductResults;
