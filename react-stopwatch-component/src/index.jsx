import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      seconds: 0
    };
    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer(event) {
    if (!this.state.isRunning) {
      this.setState({
        isRunning: true
      });
      this.timerID = setInterval(() => {
        this.setState({
          seconds: this.state.seconds + 1
        });
      }
      , 1000);
    } else {
      clearInterval(this.timerID);
      this.setState({
        isRunning: false,
        seconds: this.state.seconds
      });
    }
  }

  resetTimer(event) {
    if (!this.state.isRunning) {
      this.setState({ seconds: 0 });
    }
  }

  render() {
    if (this.state.isRunning) {
      return (
        <>
          <div className="container" onClick={this.resetTimer}>
            <div className="timer-display">{this.state.seconds}</div>
          </div>
          <i className="fas fa-play" onClick={this.startTimer}></i>
        </>
      );
    } else {
      return (
        <>
          <div className="container" onClick={this.resetTimer}>
            <div className="timer-display">{this.state.seconds}</div>
          </div>
          <i className="fas fa-pause" onClick={this.startTimer}></i>
        </>
      );
    }
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.getElementById('root')
);
