//importing hooks & random id's
import { useEffect } from 'react';
import { useProductsActions, useTypedSelector } from '../../hooks';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
//importing components
import Product from './Product';
import FormSelect from '../Forms/FormSelect';
//products component
const ProductResults: React.FC = () => {
  //redux state, router history & actions
  const history = useHistory();
  const { filterType } = useParams<{ filterType: string }>();
  const { fetchProductsStart } = useProductsActions();
  const { products } = useTypedSelector(state => state.productsData);
  //fetching products
  useEffect(() => {
    fetchProductsStart(filterType);
  }, [fetchProductsStart, filterType]);
  //on change handler
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target.value;
    history.push(`/search/${target}`);
  };
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
    defaultValue: filterType,
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
    onChange: onChangeHandler,
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
            key: uuidv4(),
          };
          return <Product {...productConfig} />;
        })}
      </div>
    </div>
  );
};

export default ProductResults;
