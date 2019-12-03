import { TAction } from '../actions';
import actionTypes from '../actions/types';

export interface TSort {
  cheap: boolean,
  fast: boolean,
}

export const initialState = {
  cheap: false,
  fast: true,
}

export default function sortReducer(
  state: TSort = initialState,
  action: TAction = { type: "", payload: {} }
): TSort {
  switch (action.type) {
    case actionTypes.CHANGE_SORT:
      return {...state};
    default:
      return state;
  }
}
