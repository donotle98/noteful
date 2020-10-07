import React, { Component } from "react";
import SideBar from "../sections/SideBar";
import { withRouter, Link } from "react-router-dom";
import Note from "../notes/Note";
import "../assets/FolderRoute.css";

class FolderRoute extends Component {
  render() {
    const { folderId } = this.props.match.params;
    const folderArr = this.props.getNotesFolder(folderId);
    return (
      <div className="float-container float-child">
        <div className="side-bar-route">
          <SideBar />
          <div className="back-button-div">
            <button onClick={this.props.history.goBack} className="go-back">
              Go Back
            </button>
          </div>
        </div>

        <div className="notes-section-route float-child">
          <ul>
            {folderArr.map((x) => (
              <Note
                key={x.id}
                id={x.id}
                name={x.name}
                modified={x.modified}
                folderId={x.folderId}
                content={x.content}
              ></Note>
            ))}
            <Link to="/add/AddNotes" className="add-note">
              <div className="add-note">
                <li>Add Note</li>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}
export default withRouter(FolderRoute);
