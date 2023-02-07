//importing hooks
import { useState, useEffect } from 'react';
import { useTypedSelector, useOrdersActions } from '../../hooks';
//importing types
import { Address, Order } from '../../interfaces';
import { AddressType } from '../../../types';
import { useHistory } from 'react-router-dom';
//importing selectors
import {
  selectCartItemsCount,
  selectCartTotal,
  selectCartItems,
} from '../../state';
import { createStructuredSelector } from 'reselect';
//importing utils
import { notEnoughInfo, stripeAPI } from '../../Utils';
//importing components
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';
import { CountryDropdown } from 'react-country-region-selector';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const initialAddress: Address = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  postal_code: '',
  country: '',
};

const PaymentDetails = () => {
  const { total, itemCount, cartItems } = useTypedSelector(
    createStructuredSelector({
      total: selectCartTotal,
      itemCount: selectCartItemsCount,
      cartItems: selectCartItems,
    })
  );

  const history = useHistory();
  const { saveOrderHistoryStart } = useOrdersActions();
  const elements = useElements();
  const stripe = useStripe();

  const [shippingAddress, setShippingAddress] = useState<Address>(
    initialAddress
  );
  const [billingAddress, setBillingAddress] = useState<Address>(initialAddress);
  const [recipientName, setRecipientName] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');

  useEffect(() => {
    if (itemCount < 1) {
      history.push('/account');
    }
  }, [history, itemCount]);

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
      .post('/payments/create', {
        amount: total * 100,
        shipping: {
          name: recipientName,
          address: {
            ...shippingAddress,
          },
        },
      })
      .then(({ data: client_secret }) => {
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
              .confirmCardPayment(client_secret, {
                payment_method: paymentMethod?.id,
              })
              .then(({ paymentIntent }) => {
                //order config
                const orderConfig: Order = {
                  orderTotal: total,
                  orderItems: cartItems.map(item => {
                    //destructuring
                    const {
                      documentId,
                      thumbnail,
                      name,
                      price,
                      quantity,
                    } = item;
                    return {
                      documentId,
                      thumbnail,
                      name,
                      price,
                      quantity,
                    };
                  }),
                };
                //saving order history
                saveOrderHistoryStart(orderConfig);
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
            name="postal_code"
            value={shippingAddress.postal_code}
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
            name="postal_code"
            value={billingAddress.postal_code}
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
