import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class Note extends Component {
  state = {};
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
              <button className="btn-one">
                <span>Delete</span>
              </button>
            </div>
          </h2>
        </li>
      </div>
    );
  }
}

export default Note;
