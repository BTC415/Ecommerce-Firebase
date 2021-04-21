//importing selector
import { createSelector } from 'reselect';
//importing types
import { State } from '../types';
//Selectors
const selectCartData = (state: State) => state.cart;
