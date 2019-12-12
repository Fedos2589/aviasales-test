import { TAction } from '../actions';
import actionTypes from '../actions/types';

export interface TFlight {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string,
      destination: string,
      date: string,
      stops: string[],
      duration: number,
    },
    {
      origin: string,
      destination: string,
      date: string,
      stops: string[],
      duration: number,
    },
  ];
}

export type TFlights = TFlight[];

export const initialState = [];

export default function flightsReducer(
  state: TFlights = initialState,
  action: TAction = { type: "", payload: {} }
): TFlights {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_FLIGHTS_START:
      return { ...state, ...initialState };
    case actionTypes.GET_FLIGHTS_SUCCESS:
      return { ...state, ...payload };
    case actionTypes.GET_FLIGHTS_ERROR:
      return { ...state, ...payload };
    default:
      return state;
  }
}
