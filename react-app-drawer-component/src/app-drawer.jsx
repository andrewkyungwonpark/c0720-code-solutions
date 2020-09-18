import React from 'react';
class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      drawerOpen: !this.state.drawerOpen
    }));
  }

  render() {
    if (!this.state.drawerOpen) {
      return (
        <div className="window">
          <i className="fas fa-bars" onClick={this.handleClick}></i>
          <div className="drawer hidden">
            <ul className="nav-bar">
              <h2>Hello</h2>
              <li>My</li>
              <li>Name</li>
              <li>JEFF</li>
            </ul>
            <div className="background-open hidden"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="window">
          <i className="fas fa-bars hidden"></i>
          <div className="drawer">
            <ul className="nav-bar">
              <h2 onClick={this.handleClick}>Hello</h2>
              <li onClick={this.handleClick}>My</li>
              <li onClick={this.handleClick}>Name</li>
              <li onClick={this.handleClick}>JEFF</li>
            </ul>
            <div className="background-open" onClick={this.handleClick}></div>
          </div>
        </div >
      );
    }
  }
}

export default AppDrawer;
