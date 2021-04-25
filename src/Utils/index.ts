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
    !shippingAddress.postalCode ||
    !billingAddress.line1 ||
    !billingAddress.city ||
    !billingAddress.country ||
    !billingAddress.state ||
    !billingAddress.postalCode ||
    !recipientName ||
    !nameOnCard
  );
};
