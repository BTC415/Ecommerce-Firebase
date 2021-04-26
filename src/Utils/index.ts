//import utils
import axios from 'axios';
import { ColumnName } from '../../types';
import { Address, CurrentUser, Column } from '../interfaces';
import moment from 'moment';
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
  baseURL: process.env.REACT_APP_API_URL,
});

export const columns: Column[] = [
  {
    id: 'orderCreatedDate',
    lable: 'Order Date',
  },
  {
    id: 'documentId',
    lable: 'Order ID',
  },
  {
    id: 'orderTotal',
    lable: 'Amount',
  },
];

export const styles: React.CSSProperties = {
  fontSize: '16px',
  cursor: 'pointer',
  width: '10%',
};

export const formatText = (
  columnName: ColumnName,
  columnValue: string | Date | undefined | number
) => {
  switch (columnName) {
    case 'orderTotal':
      return `$${columnValue}`;
    case 'orderCreatedDate':
      return moment(columnValue).format('DD/MM/YYYY');
    default:
      return columnValue;
  }
};
