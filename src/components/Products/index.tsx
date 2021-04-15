//importing hooks & random id's
import { useEffect } from 'react';
import { useProductsActions, useTypedSelector } from '../../hooks';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
//importing components
import Product from './Product';
import FormSelect from '../Forms/FormSelect';
import LoadMore from '../LoadMore';
//products component
const ProductResults: React.FC = () => {
  //redux state, router history & actions
  const history = useHistory();
  const { filterType } = useParams<{ filterType: string }>();
  const { fetchProductsStart } = useProductsActions();
  const { data, queryDoc, isLastPage } = useTypedSelector(
    state => state.productsData.products
  );
  //fetching products
  useEffect(() => {
    fetchProductsStart(filterType);
  }, [fetchProductsStart, filterType]);
  //on change handler
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target.value;
    history.push(`/search/${target}`);
  };
  //on load more handler
  const onLoadMoreHandler = () => {
    if (queryDoc) fetchProductsStart(filterType, queryDoc, data);
  };
  //type guards
  if (!Array.isArray(data)) return null;
  if (data.length < 1) {
    return (
      <div className="products">
        <p>No search results. Please make sure there are products.</p>
      </div>
    );
  }
  //configs
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
  const loadMoreConfig = {
    onLoadMore: onLoadMoreHandler,
  };
  return (
    <div className="products" key={uuidv4()}>
      <h1>Browse Products</h1>
      <FormSelect {...filtersConfig} />
      <div className="products__grid">
        {data.map(productData => {
          return <Product {...productData} key={uuidv4()} />;
        })}
      </div>
      {!isLastPage && <LoadMore {...loadMoreConfig} />}
    </div>
  );
};

export default ProductResults;
