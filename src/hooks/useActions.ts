import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state';
import { useMemo } from 'react';
//use actions custom hook
export const useActions = () => {
  const dispatch = useDispatch();
  //binding actions just once (avoiding infinite loops)
  return useMemo(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};
