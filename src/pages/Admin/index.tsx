//importing hooks & random id's
import { useState, useEffect } from 'react';
import { useProductsActions, useTypedSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
//importing components
import Button from '../../components/Forms/Button';
import Modal from '../../components/Modal';
import FormSelect from '../../components/Forms/FormSelect';
import FormInput from '../../components/Forms/FormInput';
import LoadMore from '../../components/LoadMore';
//admin component
const Admin = () => {
  //local state
  const [isModalHidden, setIsModalHidden] = useState(true);
  const [productCategory, setProductCategory] = useState('mens');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  //redux state, router history & actions
  const {
    addProductStart,
    fetchProductsStart,
    deleteProductStart,
  } = useProductsActions();
  const { filterType } = useParams<{ filterType: string }>();
  const { data, queryDoc, isLastPage } = useTypedSelector(
    state => state.productsData.products
  );
  //toggle modal function
  const toggleModal = () => setIsModalHidden(!isModalHidden);
  //on load more
  const onLoadMore = () => {
    if (queryDoc) fetchProductsStart(filterType, queryDoc, data);
  };
  //configs
  const configModal = {
    isModalHidden,
    toggleModal,
  };
  const loadMoreConfig = {
    onLoadMore,
  };
  //resetting the form
  const resetForm = () => {
    setProductCategory('mens');
    setProductName('');
    setProductPrice(0);
    setProductThumbnail('');
    setIsModalHidden(true);
  };
  //on submit handler
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      productName.length > 0 &&
      productPrice > 0 &&
      productThumbnail.length > 0
    ) {
      addProductStart({
        category: productCategory,
        name: productName,
        price: productPrice,
        thumbnail: productThumbnail,
      });
      resetForm();
    }
  };
  //on delete product handler
  const onDeleteProductHandler = (productID: string) => {
    deleteProductStart(productID);
  };
  //fetching products
  useEffect(() => {
    fetchProductsStart();
  }, [fetchProductsStart]);
  return (
    <div className="admin">
      <div className="call__to__actions">
        <ul>
          <li>
            <Button onClick={() => toggleModal()}>Add new product</Button>
          </li>
        </ul>
      </div>
      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={onSubmitHandler}>
            <h2>Add new product</h2>
            <FormSelect
              label="Category"
              options={[
                {
                  value: 'mens',
                  name: 'Mens',
                },
                {
                  value: 'womens',
                  name: 'Womens',
                },
              ]}
              onChange={e => setProductCategory(e.target.value)}
            />
            <FormInput
              label="Name"
              type="text"
              value={productName}
              onChange={e => setProductName(e.target.value)}
            />
            <FormInput
              label="Main image URL"
              type="url"
              value={productThumbnail}
              onChange={e => setProductThumbnail(e.target.value)}
            />
            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              onChange={e => setProductPrice(parseFloat(e.target.value))}
            />
            <Button type="submit">Add product</Button>
          </form>
        </div>
      </Modal>
      <div className="manage__products">
        {data.map(productData => {
          const { price, name, thumbnail, documentId } = productData;
          return (
            <div className="product__admin__card" key={uuidv4()}>
              <div className="img__container">
                <img src={thumbnail} alt="product-preview" />
              </div>
              <div className="text__content">
                <div className="product__details">
                  <div className="product__name">Name: {name}</div>
                  <div className="product__price">Price: ${price}</div>
                </div>
                <div
                  className="delete__icon"
                  onClick={() => onDeleteProductHandler(documentId!)}
                >
                  <i className="fas fa-trash-alt"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {!isLastPage && <LoadMore {...loadMoreConfig} />}
    </div>
  );
};
export default Admin;
