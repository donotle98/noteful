import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/HeaderSection.css";

class HeaderSection extends Component {
  render() {
    return (
      <div className="header-section">
        <h1 className="header-text">
          <Link className="header-link" to="/">
            Noteful
          </Link>
        </h1>
      </div>
    );
  }
}
export default HeaderSection;
