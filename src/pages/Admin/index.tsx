//importing hooks
import { useState, useEffect } from 'react';
import { useProductsActions, useTypedSelector } from '../../hooks';
//importing components
import Button from '../../components/Forms/Button';
import Modal from '../../components/Modal';
import FormSelect from '../../components/Forms/FormSelect';
import FormInput from '../../components/Forms/FormInput';
//admin component
const Admin = () => {
  //local state
  const [isModalHidden, setIsModalHidden] = useState<boolean>(true);
  const [productCategory, setProductCategory] = useState<string>('mens');
  const [productName, setProductName] = useState<string>('');
  const [productThumbnail, setProductThumbnail] = useState<string>('');
  const [productPrice, setProductPrice] = useState<number>(0);
  //redux actions & state
  const {
    addProductStart,
    fetchProductsStart,
    deleteProductStart,
  } = useProductsActions();
  const { products } = useTypedSelector(state => state.productsData);
  //toggle modal function
  const toggleModal = () => setIsModalHidden(!isModalHidden);
  //modal config
  const configModal = {
    isModalHidden,
    toggleModal,
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
    addProductStart({
      category: productCategory,
      name: productName,
      price: productPrice,
      thumbnail: productThumbnail,
    });
    resetForm();
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
        {products.map(product => {
          return (
            <div className="product__admin__card">
              <div className="img__container">
                <img src={product.thumbnail} alt="product-preview" />
              </div>
              <div className="text__content">
                <div className="product__details">
                  <div className="product__name">Name: {product.name}</div>
                  <div className="product__price">Price: ${product.price}</div>
                </div>
                <div
                  className="delete__icon"
                  onClick={() => onDeleteProductHandler(product.documentId!)}
                >
                  <i className="fas fa-trash-alt"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Admin;
