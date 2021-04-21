import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import {
  CartActionCreators,
  ProductsActionCreators,
  UserActionCreators,
} from '../state';
import { useMemo } from 'react';

//use actions custom hooks
export const useUserActions = () => {
  const dispatch = useDispatch();
  //binding actions just once (avoiding infinite loops)
  return useMemo(() => {
    return bindActionCreators(UserActionCreators, dispatch);
  }, [dispatch]);
};

export const useProductsActions = () => {
  const dispatch = useDispatch();
  //binding actions just once (avoiding infinite loops)
  return useMemo(() => {
    return bindActionCreators(ProductsActionCreators, dispatch);
  }, [dispatch]);
};

export const useCartActions = () => {
  const dispatch = useDispatch();
  //binding actions just once (avoiding infinite loops)
  return useMemo(() => {
    return bindActionCreators(CartActionCreators, dispatch);
  }, [dispatch]);
};
