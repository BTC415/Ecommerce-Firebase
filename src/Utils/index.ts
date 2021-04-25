import axios from 'axios';
import { Address, CurrentUser } from '../interfaces';
//utility functions
export const checkUserIsAdmin = (currentUser: CurrentUser | null) => {
  //checking if user is an admin logic
  if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;
  if (currentUser.userRoles.includes('admin')) return true;
  return false;
};

export const showTwoNumbersAfterDecimal = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const notEnoughInfo = (
  shippingAddress: Address,
  billingAddress: Address,
  recipientName: string,
  nameOnCard: string
) => {
  return (
    !shippingAddress.line1 ||
    !shippingAddress.city ||
    !shippingAddress.country ||
    !shippingAddress.state ||
    !shippingAddress.postal_code ||
    !billingAddress.line1 ||
    !billingAddress.city ||
    !billingAddress.country ||
    !billingAddress.state ||
    !billingAddress.postal_code ||
    !recipientName ||
    !nameOnCard
  );
};

export const stripeAPI = axios.create({
  baseURL: 'http://localhost:8282',
});
