'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './HomeContainer';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, hashHistory, IndexRedirect, browserHistory, IndexRoute} from 'react-router';


ReactDOM.render(
  <Provider store={store}>
	    <Router history={hashHistory}> 
			<Route path="/" component={Home}>
				<IndexRoute component={Home}/>
			</Route>
	  </Router>
  </Provider>,
  document.getElementById('app')
);