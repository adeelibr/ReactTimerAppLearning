import React from 'react';

let TimerForm = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    this.props.onSetCountdown(parseInt(0, 10));
  },
  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <button type="submit" className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

export default TimerForm;
