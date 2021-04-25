//importing hooks
import { useState } from 'react';
//importing components
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';
import { CountryDropdown } from 'react-country-region-selector';
//importing types
import { Address } from '../../interfaces';
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
  };
  return (
    <div className="payment__details">
      <form onSubmit={handleFormSubmit}>
        <div className="group">
          <h2>Shipping Address</h2>
          <FormInput
            placeholder="Recipient Name"
            type="text"
            value={recipientName}
            onChange={e => setRecipientName(e.target.value)}
          />
          <FormInput
            placeholder="Line 1"
            type="text"
            value={shippingAddress.line1}
            onChange={e =>
              setShippingAddress({ ...shippingAddress, line1: e.target.value })
            }
          />
          <FormInput
            placeholder="Line 2"
            type="text"
            value={shippingAddress.line2}
            onChange={e =>
              setShippingAddress({ ...shippingAddress, line2: e.target.value })
            }
          />
          <FormInput
            placeholder="City"
            type="text"
            value={shippingAddress.city}
            onChange={e =>
              setShippingAddress({ ...shippingAddress, city: e.target.value })
            }
          />
          <FormInput
            placeholder="State"
            type="text"
            value={shippingAddress.state}
            onChange={e =>
              setShippingAddress({ ...shippingAddress, state: e.target.value })
            }
          />
          <FormInput
            placeholder="Postal Code"
            type="text"
            value={shippingAddress.postalCode}
            onChange={e =>
              setShippingAddress({
                ...shippingAddress,
                postalCode: e.target.value,
              })
            }
          />
          <div className="form__input__container checkout__input">
            <CountryDropdown
              valueType="short"
              value={shippingAddress.country}
              onChange={value =>
                setShippingAddress({
                  ...shippingAddress,
                  country: value,
                })
              }
            />
          </div>
        </div>
        <div className="group">
          <h2>Billing Address</h2>
          <FormInput
            placeholder="Name on Card"
            type="text"
            value={nameOnCard}
            onChange={e => setNameOnCard(e.target.value)}
          />
          <FormInput
            placeholder="Line 1"
            type="text"
            value={billingAddress.line1}
            onChange={e =>
              setBillingAddress({
                ...billingAddress,
                line1: e.target.value,
              })
            }
          />
          <FormInput
            placeholder="Line 2"
            type="text"
            value={billingAddress.line2}
            onChange={e =>
              setBillingAddress({
                ...billingAddress,
                line2: e.target.value,
              })
            }
          />
          <FormInput
            placeholder="City"
            type="text"
            value={billingAddress.city}
            onChange={e =>
              setBillingAddress({
                ...billingAddress,
                city: e.target.value,
              })
            }
          />
          <FormInput
            placeholder="State"
            type="text"
            value={billingAddress.state}
            onChange={e =>
              setBillingAddress({
                ...billingAddress,
                state: e.target.value,
              })
            }
          />
          <FormInput
            placeholder="Postal Code"
            type="text"
            value={billingAddress.postalCode}
            onChange={e =>
              setBillingAddress({
                ...billingAddress,
                postalCode: e.target.value,
              })
            }
          />
          <div className="form__input__container checkout__input">
            <CountryDropdown
              valueType="short"
              value={billingAddress.country}
              onChange={value =>
                setBillingAddress({
                  ...billingAddress,
                  country: value,
                })
              }
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
