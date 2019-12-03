import { TAction } from '../actions';
import actionTypes from '../actions/types';

export interface TFilter {
  all: boolean,
  no: boolean,
  one: boolean,
  two: boolean,
  three: boolean,
}

export const initialState = {
  all: false,
  no: false,
  one: true,
  two: true,
  three: false,
};

export default function filterReducer(
  state: TFilter = initialState,
  action: TAction = { type: "", payload: {} }
): TFilter {
  switch (action.type) {
    case actionTypes.CHANGE_FILTER:
      return {...state};
    default:
      return state;
  }
}
