//importing hooks
import { useState } from 'react';
//importing components
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';
import { CountryDropdown } from 'react-country-region-selector';
//payment details
const PaymentDetails = () => {
  //local state
  // const
  //on submit handler
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="payment__details">
      <form onSubmit={handleFormSubmit}>
        <div className="group">
          <h2>Shipping Address</h2>
          <FormInput placeholder="Recipient Name" type="text" />
          <FormInput placeholder="Line 1" type="text" />
          <FormInput placeholder="Line 2" type="text" />
          <FormInput placeholder="City" type="text" />
          <FormInput placeholder="State" type="text" />
          <FormInput placeholder="Postal Code" type="text" />
          <div className="form__input__container checkout__input">
            <CountryDropdown
              valueType="short"
              value=""
              onChange={e => console.log(e)}
            />
          </div>
        </div>
        <div className="group">
          <h2>Billing Address</h2>
          <FormInput placeholder="Name on Card" type="text" />
          <FormInput placeholder="Line 1" type="text" />
          <FormInput placeholder="Line 2" type="text" />
          <FormInput placeholder="City" type="text" />
          <FormInput placeholder="State" type="text" />
          <FormInput placeholder="Postal Code" type="text" />
          <div className="form__input__container checkout__input">
            <CountryDropdown
              valueType="short"
              value=""
              onChange={e => console.log(e)}
            />
          </div>
        </div>
        <div className="group">
          <h2>Card Details</h2>
        </div>
      </form>
    </div>
  );
};

export default PaymentDetails;
