import React, { Component } from "react";

class Folder extends Component {
  state = {};
  render() {
    return (
      <li>
        <h3>{this.props.name}</h3>
      </li>
    );
  }
}

export default Folder;
