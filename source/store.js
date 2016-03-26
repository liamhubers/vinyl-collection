import { createStore, compose, applyMiddleware } from 'redux';
import { reduxReactRouter } from 'redux-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import createHistory from 'history/lib/createHashHistory';

import rootReducer from 'reducers/root';

const store = compose(
  applyMiddleware(thunkMiddleware, createLogger()),
  reduxReactRouter({
    createHistory: (options) => createHistory(Object.assign({ queryKey: false }, options)),
  })
)(createStore)(rootReducer, {});

export default store;
