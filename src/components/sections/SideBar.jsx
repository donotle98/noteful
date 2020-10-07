import React, { Component } from "react";
import store from "../../store/dummy_Store";
import Folder from "../folders/Folder";
import "../assets/SideBar.css";
import { Link, withRouter } from "react-router-dom";

class SideBar extends Component {
  render() {
    const folderList = store.folders.map((x) => (
      <Folder key={x.id} id={x.id} name={x.name} />
    ));
    return (
      <div className="float-container">
        <div className="side-bar">
          <nav>
            <ul>
              {folderList}
              <li className="add-folder">
                <div>
                  <Link className="add-folder-link" to="/add/AddToFolders">
                    Add folder
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default withRouter(SideBar);
