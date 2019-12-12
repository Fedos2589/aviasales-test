import { combineReducers } from 'redux';
import filterReducer, { TFilter } from './filterReducer';
import sortReducer, { TSort } from './sortReducer';
import flightsReducer, { TFlights } from './flightsReducer';

export interface AppState {
  filter: TFilter;
  sort: TSort;
  flights: TFlights
}

export default combineReducers<AppState>({
  filter: filterReducer,
  sort: sortReducer,
  flights: flightsReducer,
});
