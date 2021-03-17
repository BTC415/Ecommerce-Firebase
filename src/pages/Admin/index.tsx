//importing hooks
import { useState } from 'react';
import { useProductsActions } from '../../hooks';
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
  //redux actions
  const { addProductStart } = useProductsActions();
  //toggle modal function
  const toggleModal = () => setIsModalHidden(!isModalHidden);
  //modal config
  const configModal = {
    isModalHidden,
    toggleModal,
  };
  //on submit handler
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
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
    </div>
  );
};
export default Admin;
