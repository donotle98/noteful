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
            style={{ transition: "all 0.9s ease 0s" }}
            activeStyle={{
              fontSize: "3vh",
              transition: "all 0.9s ease 0s",
              boxShadow: "2px 2px #696969, 3px 3px #696969, 4px 4px#696969",
            }}
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
