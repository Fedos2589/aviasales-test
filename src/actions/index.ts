import axios from 'axios';
import actionTypes from './types';
import { Dispatch } from 'redux';

export interface TAction {
  type: string;
  payload?: any;
}

export const getFlights = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getFlightsStart());

    try {
      const { data: { searchId } } = await axios.get('https://front-test.beta.aviasales.ru/search');
      const { data: { tickets } } = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
      dispatch(getFlightsSuccess(tickets));
    } catch (err) {
      dispatch(getFlightsError(err.message));
    }
  };
};

const getFlightsStart = () => ({
  type: actionTypes.GET_FLIGHTS_START,
});

const getFlightsSuccess = (flights: Object) => ({
  type: actionTypes.GET_FLIGHTS_SUCCESS,
  payload: {
    flights
  }
});

const getFlightsError = (error: string) => ({
  type: actionTypes.GET_FLIGHTS_ERROR,
  payload: {
    error
  }
});
