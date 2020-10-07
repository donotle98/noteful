import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Folder extends Component {
  state = {};
  render() {
    return (
      <li>
        <h3>
          <NavLink
            activeClassName="folder-link-active"
            className="folder-link "
            to={`/folder/${this.props.id}`}
            exact
          >
            {this.props.name}
          </NavLink>
        </h3>
      </li>
    );
  }
}

export default Folder;
