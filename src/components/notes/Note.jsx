import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";
import AppContext from "../../store/appContext";

class Note extends Component {
  static contextType = AppContext;

  deleteNoteItem = (noteId) => {
    fetch("http://localhost:9090/notes/" + `${noteId}`, {
      method: "DELETE",
    })
      .then((note) => {
        note.json();
      })
      .then((noteResponse) => {
        this.context.deleteNoteItem(noteId);
        this.context.notes = this.context.notes.filter((x) => x.id !== noteId);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  render() {
    return (
      <div className="note-div">
        <li>
          <h2>
            <Link to={`/notes/${this.props.id}`} className="note-link">
              <span className="note-name">{this.props.name}</span> Modified:{" "}
              {moment(this.props.modified).format("MM/DD/YYYY")}
            </Link>
            <div className="butt-div">
              <button
                className="btn-one"
                onClick={() => {
                  this.deleteNoteItem(this.props.id);
                }}
              >
                <span>Delete</span>
              </button>
            </div>
          </h2>
        </li>
      </div>
    );
  }
}

export default withRouter(Note);
