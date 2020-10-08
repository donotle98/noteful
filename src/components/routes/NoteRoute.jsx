import React, { Component } from "react";
import AppContext from "../../store/appContext";
import { withRouter } from "react-router-dom";
import moment from "moment";
import "../assets/NoteRoute.css";
import PropTypes from "prop-types";

class NoteRoute extends Component {
  static contextType = AppContext;
  render() {
    const { noteId } = this.props.match.params;
    const note = this.props.getNoteInfo(noteId);
    return (
      <div className="float-container float-child">
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
          <div className="note-div">
            <button
              className="btn-one"
              onClick={() => {
                this.context.deleteNoteItem(note.id);
                this.props.history.goBack();
              }}
            >
              <span>Delete</span>
            </button>
          </div>
          <div className="note-route-back">
            <button onClick={this.props.history.goBack} className="go-back">
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NoteRoute);

NoteRoute.propTypes = {
  getNoteInfo: PropTypes.func,
};
