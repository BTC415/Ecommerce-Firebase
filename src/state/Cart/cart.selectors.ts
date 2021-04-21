//importing selector
import { createSelector } from 'reselect';
//importing types
import { RootState } from '../reducers';
//Selectors
const selectCartData = (state: RootState) => state.cart;
