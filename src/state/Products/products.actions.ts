//importing types
import { Product } from '../interfaces';
import { ActionType } from './products.action-types';
//action type
export type ProductAction = AddProductStartAction;
//action interfaces
interface AddProductStartAction {
  type: ActionType.ADD_NEW_PRODUCT_START;
  payload: Product;
}
