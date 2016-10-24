import React from 'react';

import Clock from './Clock';

let Countdown = React.createClass({
  render() {
    return (
      <div>
        <h3 className="text-center">Countdown</h3>
        <Clock totalSeconds={129} />
      </div>
    );
  }
});

export default Countdown;
