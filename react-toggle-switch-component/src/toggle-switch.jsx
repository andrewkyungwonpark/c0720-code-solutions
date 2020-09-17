import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState(state => ({
      switchOn: !state.switchOn
    }));
  }

  render() {
    const switchOnorOff = this.state.switchOn;
    if (switchOnorOff) {
      return (
        <div className="box" onClick={this.handleClick}>
          <div className="outer-on">
            <div className="on"></div>
            <div>
              <div className="text">ON</div>
            </div>
          </div>
        </div>
      );
    }
    if (!switchOnorOff) {
      return (
        <div className="box" onClick={this.handleClick}>
          <div className="outer-off">
            <div className="off"></div>
            <div>
              <div className="text">OFF</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ToggleSwitch;
