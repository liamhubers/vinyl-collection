import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { ReduxRouter } from 'redux-router';

console.log(process.env);

import store from 'store';

import Container from 'components/Container';

render(
  <Provider store={store}>
    <ReduxRouter>
      <Route path="/" component={Container}/>
    </ReduxRouter>
  </Provider>,
  document.getElementById('root')
);
