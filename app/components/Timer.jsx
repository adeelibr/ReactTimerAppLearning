import React from 'react';

import Clock from './Clock';
import TimerForm from './TimerForm';
import Controls from './Controls';

let Timer = React.createClass({
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
          case 'stopped':
            this.setState({ count: 0 });
          case 'paused':
            clearInterval(this.timer);
            this.timer = undefined;
            break;
      }
    }
  },
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({ count: newCount});

      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000)
  },
  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange(newStatus) {
    this.setState({ countdownStatus: newStatus });
  },
  render() {
    let {count, countdownStatus} = this.state;
    let renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />;
      } else {
        return <TimerForm onSetCountdown={this.handleSetCountdown} />
      }
    };
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
});

export default Timer;
