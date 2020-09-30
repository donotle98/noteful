import React, { Component } from "react";
import SideBar from "../sections/SideBar";
import MainSection from "../sections/MainSection";

class FolderRoute extends Component {
  render() {
    return (
      <div>
        <SideBar store={this.props.store} />
        <MainSection store={this.props.store} />
      </div>
    );
  }
}

export default FolderRoute;
