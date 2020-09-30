import React, { Component } from "react";
import store from "../../store/dummy_Store";
import Folder from "../folders/Folder";

class SideBar extends Component {
  state = { folders: [] };

  render() {
    const folderList = this.props.store.folders.map((x) => {
      <Folder key={x.id} id={x.id} name={x.name} />;
    });
    return (
      <div>
        <ul>{folderList}</ul>
        <button>Add Folder</button>
      </div>
    );
  }
}

export default SideBar;
