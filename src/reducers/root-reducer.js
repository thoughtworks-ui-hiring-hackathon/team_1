import { combineReducers } from 'redux';
import movies from './movies';
import { homeReducer } from './home';
let Reducer = combineReducers({
  movies,
  homeReducer
});

export default Reducer;
