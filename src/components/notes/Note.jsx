import React, { Component } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import moment from "moment";

class Note extends Component {
  state = {};
  render() {
    return (
      <div className="note-div">
        <li>
          <h2>
            <Link to={`/notes/${this.props.id}`} className="note-link">
              {this.props.name}
            </Link>
          </h2>
          <h3 className="date-modified">
            Modified: {moment(this.props.modified).format("MM/DD/YYYY")}
          </h3>
          <button className="delete-button">Delete</button>
        </li>
        <div></div>
      </div>
    );
  }
}

export default Note;
