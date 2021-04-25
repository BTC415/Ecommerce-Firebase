//importing hooks
import { useState } from 'react';
import { useTypedSelector } from '../../hooks';
//importing selectors
import { selectCartTotal } from '../../state';
import { createStructuredSelector } from 'reselect';
//importing components
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';
import { CountryDropdown } from 'react-country-region-selector';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
//importing types
import { Address } from '../../interfaces';
import { AddressType } from '../../../types';
import { notEnoughInfo, stripeAPI } from '../../Utils';
//initial address
const initialAddress: Address = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
};
//payment details
const PaymentDetails = () => {
  //redux state
  const { total } = useTypedSelector(
    createStructuredSelector({
      total: selectCartTotal,
    })
  );
  //hooks
  const elements = useElements();
  const stripe = useStripe();
  //local state
  const [shippingAddress, setShippingAddress] = useState<Address>(
    initialAddress
  );
  const [billingAddress, setBillingAddress] = useState<Address>(initialAddress);
  const [recipientName, setRecipientName] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  //on submit handler
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!elements) return;
    //getting card element
    const cardElement = elements.getElement('card')!;
    //type guard
    const needMoreInfo = notEnoughInfo(
      shippingAddress,
      billingAddress,
      recipientName,
      nameOnCard
    );
    if (needMoreInfo) return;
    //posting to api
    stripeAPI
      .post('http://localhost:8282/payment/create', {
        amount: total * 100,
        shipping: {
          name: recipientName,
          address: {
            ...shippingAddress,
          },
        },
      })
      .then(({ data }) => {
        //creating payment
        stripe
          ?.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
              name: nameOnCard,
              address: { ...billingAddress },
            },
          })
          .then(({ paymentMethod }) => {
            stripe
              .confirmCardPayment(data.client_secret, {
                payment_method: paymentMethod?.id,
              })
              .then(({ paymentIntent }) => {
                console.log(paymentIntent);
              });
          });
      });
  };
  //handling shipping info
  const handleShipping = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value,
    });
  };
  //handling billing info
  const handleBilling = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value,
    });
  };
  //handling country info
  const handleCountryInfo = (value: string, addressType: AddressType) => {
    addressType === 'shipping'
      ? setShippingAddress({
          ...shippingAddress,
          country: value,
        })
      : setBillingAddress({
          ...billingAddress,
          country: value,
        });
  };
  //card config
  const cardConfig = {
    iconStyle: 'solid' as 'solid',
    style: {
      base: { fontSize: '16px' },
    },
    hidePostalCode: true,
  };
  return (
    <div className="payment__details">
      <form onSubmit={handleFormSubmit}>
        <div className="group">
          <h2>Shipping Address</h2>
          <FormInput
            required
            placeholder="Recipient Name"
            type="text"
            value={recipientName}
            name="recipientName"
            onChange={e => setRecipientName(e.target.value)}
          />
          <FormInput
            required
            placeholder="Line 1"
            type="text"
            name="line1"
            value={shippingAddress.line1}
            onChange={e => handleShipping(e)}
          />
          <FormInput
            placeholder="Line 2"
            type="text"
            name="line2"
            value={shippingAddress.line2}
            onChange={e => handleShipping(e)}
          />
          <FormInput
            required
            placeholder="City"
            type="text"
            name="city"
            value={shippingAddress.city}
            onChange={e => handleShipping(e)}
          />
          <FormInput
            required
            placeholder="State"
            type="text"
            name="state"
            value={shippingAddress.state}
            onChange={e => handleShipping(e)}
          />
          <FormInput
            required
            placeholder="Postal Code"
            type="text"
            name="postalCode"
            value={shippingAddress.postalCode}
            onChange={e => handleShipping(e)}
          />
          <div className="form__input__container checkout__input" aria-required>
            <CountryDropdown
              name="country"
              valueType="short"
              value={shippingAddress.country}
              onChange={value => handleCountryInfo(value, 'shipping')}
            />
          </div>
        </div>
        <div className="group">
          <h2>Billing Address</h2>
          <FormInput
            required
            placeholder="Name on Card"
            type="text"
            name="nameOnCard"
            value={nameOnCard}
            onChange={e => setNameOnCard(e.target.value)}
          />
          <FormInput
            required
            placeholder="Line 1"
            type="text"
            name="line1"
            value={billingAddress.line1}
            onChange={e => handleBilling(e)}
          />
          <FormInput
            placeholder="Line 2"
            type="text"
            name="line2"
            value={billingAddress.line2}
            onChange={e => handleBilling(e)}
          />
          <FormInput
            required
            placeholder="City"
            type="text"
            name="city"
            value={billingAddress.city}
            onChange={e => handleBilling(e)}
          />
          <FormInput
            required
            placeholder="State"
            type="text"
            name="state"
            value={billingAddress.state}
            onChange={e => handleBilling(e)}
          />
          <FormInput
            required
            placeholder="Postal Code"
            type="text"
            name="postalCode"
            value={billingAddress.postalCode}
            onChange={e => handleBilling(e)}
          />
          <div className="form__input__container checkout__input" aria-required>
            <CountryDropdown
              name="country"
              valueType="short"
              value={billingAddress.country}
              onChange={value => handleCountryInfo(value, 'billing')}
            />
          </div>
        </div>
        <div className="group">
          <h2>Card Details</h2>
          <CardElement options={cardConfig} className="card__element" />
        </div>
        <Button type="submit">Pay Now</Button>
      </form>
    </div>
  );
};

export default PaymentDetails;
