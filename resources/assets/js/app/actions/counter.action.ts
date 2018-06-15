import { INCREASE, DECREASE } from '../constants/counter.const';
import { DispatchedAction } from '../interfaces/DispatchedAction';

export const increase = () : DispatchedAction => ({
    type: INCREASE
});

export const decrease = () : DispatchedAction => ({
    type: DECREASE
});