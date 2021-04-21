//importing selector
import { createSelector } from 'reselect';
//importing types
import { RootState } from '../reducers';
//Selectors
const selectCartData = (state: RootState) => state.cart;

const selectCartItems = createSelector(
  [selectCartData],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((qty, cartItem) => {
      return qty + cartItem.quantity;
    }, 0)
);
