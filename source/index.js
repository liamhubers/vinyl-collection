import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { ReduxRouter } from 'redux-router';

import store from 'store';

import Template from 'Template';
import Home from 'containers/Home';
import Test from 'containers/Test';

render(
  <Provider store={store}>
    <ReduxRouter>
      <Route path="/" component={Template}>
        <IndexRoute component={Home}/>
        <Route path="/test" component={Test}/>
      </Route>
    </ReduxRouter>
  </Provider>,
  document.getElementById('root')
);
