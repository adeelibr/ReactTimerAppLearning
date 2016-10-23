import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from './components/Main';
import Timer from './components/Timer';
import Countdown from './components/Countdown';

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!sass!./styles/app.scss');

let App = React.createClass({
  render: function () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Timer} />
          <Route path="/countdown" component={Countdown} />
        </Route>
      </Router>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
