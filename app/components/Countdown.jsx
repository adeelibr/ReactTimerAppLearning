import React from 'react';

import Clock from './Clock';
import CountdownForm from './CountdownForm';

let Countdown = React.createClass({
  getInitialState() {
    return {
      countdownStatus: 'stopped',
      count: 0
    };
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
          case 'started':
            this.startTimer();
            break;
      }
    }
  },
  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({ count: newCount >= 0 ? newCount : 0 });
    }, 1000)
  },
  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  render() {
    let {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }
});

export default Countdown;
