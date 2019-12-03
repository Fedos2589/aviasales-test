import actionTypes from './types';

export interface TAction {
  type: string;
  payload: any;
}

export const change = (record: any): TAction => ({
  type: actionTypes.CHANGE_FILTER,
  payload: record
})
