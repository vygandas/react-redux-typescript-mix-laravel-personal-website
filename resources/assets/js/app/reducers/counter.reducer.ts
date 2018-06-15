import { INCREASE, DECREASE } from '../constants/counter.const';
import { DispatchedAction } from "../interfaces/DispatchedAction";
import { State } from "../interfaces/State";

const initialState: State = {
  counter: {
      count: 0
  }
};

export const counter = (state  = initialState, action: DispatchedAction) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, counter: { count: state.counter.count + 1 } };
    case DECREASE:
      return { ...state, counter: { count: state.counter.count - 1 } };
    default:
      return state;
  }
};