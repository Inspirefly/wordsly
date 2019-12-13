import React from 'react';
import '../css/Color.css';
import { darkYellow, darkRed, darkOrange, darkGreen, darkBlue, darkPurple } from '../css/colors';

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    }
  }

  toggleDisplay = (e) => {
    this.setState(prevState => {
      return {hidden: !prevState.hidden}
    });
  }

  circleClick = (e) => {
    this.props.setColors(e);
    this.toggleDisplay(e);
  }

  render() {
    let displayNone = this.state.hidden ? {display: 'none'} : {display: 'initial'};

    return (
      <div id="color-picker">
        <div id="circle" style={this.props.color} onClick={this.toggleDisplay}></div>
        <div id="pick-color" style={displayNone}>
          <div id="triangle"></div>
          <div id="color-box">
            <div className="choice" style={darkRed} onClick={this.circleClick}></div>
            <div className="choice" style={darkOrange} onClick={this.circleClick}></div>
            <div className="choice" style={darkYellow} onClick={this.circleClick}></div>
            <div className="choice" style={darkGreen} onClick={this.circleClick}></div>
            <div className="choice" style={darkBlue} onClick={this.circleClick}></div>
            <div className="choice" style={darkPurple} onClick={this.circleClick}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Color;
