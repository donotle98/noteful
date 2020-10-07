import React, { Component } from "react";
import SideBar from "../sections/SideBar";
import { withRouter } from "react-router-dom";
import moment from "moment";
import "../assets/NoteRoute.css";

class NoteRoute extends Component {
  render() {
    const { noteId } = this.props.match.params;
    const note = this.props.getNoteInfo(noteId);
    const folder = this.props.findFolder(noteId);
    return (
      <div className="float-container float-child">
        <div className="side-bar-route">
          <ul className="folder-name">
            <li>
              <h3>{folder.name}</h3>
            </li>
          </ul>
        </div>
        <div className="notes-section-route float-child">
          <ul className="note-item">
            <li>
              <h2>{note.name}</h2>
              <h3 className="date-modified">
                Modified: {moment(note.modified).format("MM/DD/YYYY")}
              </h3>
              <p>{note.content}</p>
            </li>
          </ul>

          <button onClick={this.props.history.goBack} className="go-back">
            Go Back
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(NoteRoute);
