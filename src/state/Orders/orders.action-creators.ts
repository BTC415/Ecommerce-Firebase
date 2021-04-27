//importing types
import { Order } from '../../interfaces';
import { ActionType } from './orders.action-types';
import { OrdersAction } from './orders.actions';
//start action creators
export const saveOrderHistoryStart = (order: Order): OrdersAction => ({
  type: ActionType.SAVE_ORDER_HISTORY_START,
  payload: order,
});

export const getOrderHistoryStart = (uid: string): OrdersAction => ({
  type: ActionType.GET_ORDER_HISTORY_START,
  payload: uid,
});

export const setOrderHistory = (history: Order[]): OrdersAction => ({
  type: ActionType.SET_ORDER_HISTORY,
  payload: history,
});

export const getOrderDetailsStart = (orderId: string): OrdersAction => ({
  type: ActionType.GET_ORDER_DETAILS_START,
  payload: orderId,
});

export const setOrderDetails = (order: Order | null): OrdersAction => ({
  type: ActionType.SET_ORDER_DETAILS,
  payload: order,
});
