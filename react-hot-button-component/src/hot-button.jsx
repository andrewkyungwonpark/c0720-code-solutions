/* eslint-disable no-unused-vars */
import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState(state => {
      return { counter: this.state.counter + 1 };
    });
  }

  render() {
    if (this.state.counter <= 3) {
      return <button onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.counter <= 6) {
      return <button onClick={this.handleClick} className="navy white-font">Hot Button</button>;
    } else if (this.state.counter <= 9) {
      return <button onClick={this.handleClick} className="purple white-font">Hot Button</button>;
    } else if (this.state.counter <= 12) {
      return <button onClick={this.handleClick} className="pink">Hot Button</button>;
    } else if (this.state.counter <= 15) {
      return <button onClick={this.handleClick} className="orange">Hot Button</button>;
    } else if (this.state.counter <= 18) {
      return <button onClick={this.handleClick} className="yellow">Hot Button</button>;
    } else {
      return <button onClick={this.handleClick} className="white">Hot Button</button>;
    }
  }
}

export default HotButton;
