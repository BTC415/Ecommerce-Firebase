//importing types
import { Order } from '../../interfaces';
import { ActionType } from './orders.action-types';
import { OrdersAction } from './orders.actions';
//state interface
interface OrdersState {
  orderHistory: Order[];
}
//initial state
const initialState: OrdersState = {
  orderHistory: [],
};
//reducer
const ordersReducer = (
  state: OrdersState = initialState,
  action: OrdersAction
) => {
  switch (action.type) {
    case ActionType.SET_ORDER_HISTORY:
      return { ...state, orderHistory: action.payload };
    default:
      return state;
  }
};

export default ordersReducer;
