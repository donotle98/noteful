import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderSection extends Component {
  render() {
    return (
      <div className="header-section">
        <h1>
          <Link className="header-link" to="/">
            Noteful
          </Link>
        </h1>
      </div>
    );
  }
}
export default HeaderSection;
