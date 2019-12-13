import React from 'react';
import '../css/Color.css';
import { darkYellow, darkRed, darkOrange, darkGreen, darkBlue, darkPurple } from '../css/colors';

function Color(props) {
  return (
    <div id="color-picker">
      <div id="circle" style={props.color}></div>
      <div id="pick-color">
        <div id="triangle"></div>
        <div id="color-box">
          <div className="choice" style={darkRed} onClick={props.setColors}></div>
          <div className="choice" style={darkOrange} onClick={props.setColors}></div>
          <div className="choice" style={darkYellow} onClick={props.setColors}></div>
          <div className="choice" style={darkGreen} onClick={props.setColors}></div>
          <div className="choice" style={darkBlue} onClick={props.setColors}></div>
          <div className="choice" style={darkPurple} onClick={props.setColors}></div>
        </div>
      </div>
    </div>
  );
}

export default Color;
