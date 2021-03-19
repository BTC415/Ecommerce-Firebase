//importing hooks & random id's
import { useEffect } from 'react';
import { useProductsActions, useTypedSelector } from '../../hooks';
import { v4 as uuidv4 } from 'uuid';
//importing components
import Product from './Product';
import FormSelect from '../Forms/FormSelect';
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
  //config
  const filtersConfig = {
    options: [
      {
        name: 'Show all',
        value: '',
      },
      {
        name: 'Mens',
        value: 'mens',
      },
      {
        name: 'Womens',
        value: 'womens',
      },
    ],
  };
  return (
    <div className="products" key={uuidv4()}>
      <h1>Browse Products</h1>
      <FormSelect {...filtersConfig} />
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
