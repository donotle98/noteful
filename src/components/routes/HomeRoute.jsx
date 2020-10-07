import React, { Component } from "react";
import SideBar from "../sections/SideBar";
import NotesSection from "../sections/NotesSection";
import "../assets/HomeRoute.css";

class HomeRoute extends Component {
  state = {};
  render() {
    return (
      <div className="float-container float-child">
        <div className="side-bar-route">
          <SideBar />
        </div>
        <div className="notes-section-route float-child">
          <NotesSection />
        </div>
      </div>
    );
  }
}

export default HomeRoute;
