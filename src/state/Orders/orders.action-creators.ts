//importing types
import { Order } from '../../interfaces';
import { ActionType } from './orders.action-types';
//start action creators
export const saveOrderHistoryStart = (order: Order) => ({
  type: ActionType.SAVE_ORDER_HISTORY_START,
  payload: order,
});

export const getOrderHistoryStart = (uid: string) => ({
  type: ActionType.GET_ORDER_HISTORY_START,
  payload: uid,
});

export const setOrderHistory = (history: any) => ({
  type: ActionType.SET_ORDER_HISTORY,
  payload: history,
});
