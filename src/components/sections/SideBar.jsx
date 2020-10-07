import React, { Component } from "react";
import store from "../../store/dummy_Store";
import Folder from "../folders/Folder";
import { Link, withRouter } from "react-router-dom";
import "../assets/SideBar.css";

class SideBar extends Component {
  render() {
    const folderList = store.folders.map((x) => (
      <Folder key={x.id} id={x.id} name={x.name} />
    ));
    return (
      <div className="side-bar">
        <nav>
          <ul>{folderList}</ul>
        </nav>
        <div className="add-folder-section">
          <span className="add-folder-butt">
            <Link className="add-folder-link" to="/add/AddToFolders">
              Add folder
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(SideBar);
