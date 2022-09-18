import { counterActions } from "./newCounterSlice";
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

const getProducts = (searchQuery) => {
    return async (dispatch: AppDispatch, getState: number) => {
        dispatch(counterActions.incrementByAmount(getState));
    }
} 