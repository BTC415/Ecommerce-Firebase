//importing hooks & random id's
import { useEffect } from 'react';
import { useProductsActions, useTypedSelector } from '../../hooks';
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
    <div className="products">
      {products.map((product, index) => {
        return <div className="product__item" key={uuidv4()}></div>;
      })}
    </div>
  );
};

export default ProductResults;
