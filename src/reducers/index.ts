import { combineReducers } from 'redux';
import filterReducer, { TFilter } from './filterReducer';
import sortReducer, { TSort } from './sortReducer';

export interface AppState {
  filter: TFilter;
  sort: TSort;
}

export default combineReducers<AppState>({
  filter: filterReducer,
  sort: sortReducer,
});
