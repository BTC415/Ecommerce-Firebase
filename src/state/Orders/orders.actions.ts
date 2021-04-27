//importing types
import { Order } from '../../interfaces';
import { ActionType } from './orders.action-types';
//action type
export type OrdersAction =
  | SaveOrderHistoryStartAction
  | GetOrderHistoryStartAction
  | SetOrderHistoryAction
  | GetOrderDetailsStartAction
  | SetOrderDetailsAction;

//start action interfaces
export interface SaveOrderHistoryStartAction {
  type: ActionType.SAVE_ORDER_HISTORY_START;
  payload: Order;
}

export interface GetOrderHistoryStartAction {
  type: ActionType.GET_ORDER_HISTORY_START;
  payload: string;
}

export interface GetOrderDetailsStartAction {
  type: ActionType.GET_ORDER_DETAILS_START;
  payload: string;
}
//other action interfaces
interface SetOrderHistoryAction {
  type: ActionType.SET_ORDER_HISTORY;
  payload: Order[];
}

interface SetOrderDetailsAction {
  type: ActionType.SET_ORDER_DETAILS;
  payload: Order;
}
