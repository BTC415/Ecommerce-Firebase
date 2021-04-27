//import utils
import axios from 'axios';
import { OrderDetailsColumnName, OrderHistoryColumnName } from '../../types';
import {
  Address,
  CurrentUser,
  OrderDetailsColumns,
  OrderHistoryColumn,
} from '../interfaces';
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

export const orderHistoryColumns: OrderHistoryColumn[] = [
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

export const orderDetailsColumns: OrderDetailsColumns[] = [
  {
    id: 'thumbnail',
    label: '',
  },
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'price',
    label: 'Price',
  },
  {
    id: 'quantity',
    label: 'Quantity',
  },
];

export const styles: React.CSSProperties = {
  fontSize: '16px',
  cursor: 'pointer',
  width: '100%',
};

export const formatText = (
  columnName: OrderHistoryColumnName | OrderDetailsColumnName,
  columnValue: any
) => {
  switch (columnName) {
    case 'orderTotal' || 'price':
      return `$${columnValue}`;
    case 'orderCreatedDate':
      return moment(columnValue.nano).format('DD/MM/YYYY');
    case 'thumbnail':
      return <img src={columnValue} width={250} alt="thumbnail" />;
    default:
      return columnValue;
  }
};
