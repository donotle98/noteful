import React, { Component } from "react";

class Note extends Component {
  state = {};
  render() {
    return (
      <li>
        <h2>{this.props.name}</h2>
        <h3>{this.props.modified}</h3>
        <button>Delete</button>
      </li>
    );
  }
}

export default Note;
