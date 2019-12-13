import React from 'react';
import '../css/colors';

class Color extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "yellow"
    }
  }

  render() {
    return (
      <h1>Change Color</h1>
    );
  }

}

export default Color;
