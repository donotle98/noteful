import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderSection extends Component {
  state = {};

  render() {
    return Header();
  }
}

function Header() {
  return (
    <div>
      <h1>
        <Link to="../App">Noteful</Link>
      </h1>
    </div>
  );
}

export default { HeaderSection, Header };
