import React from 'react';

import Clock from './Clock';

let Timer = React.createClass({
  render() {
    return (
      <div>
        <h3 className="text-center">Timer</h3>
        <Clock />
      </div>
    );
  }
});

export default Timer;
