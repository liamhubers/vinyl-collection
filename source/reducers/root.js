import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import vinyl from './vinyl';

// Combine reducers
const rootReducer = combineReducers({
  router: routerStateReducer,
  vinyl,
});

export default rootReducer;
