import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';
//typed selector
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
