import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";
import AppContext from "../../store/appContext";
import PropTypes from "prop-types";

class Note extends Component {
  static contextType = AppContext;
  render() {
    return (
      <div className="note-div">
        <li>
          <h2>
            <Link to={`/notes/${this.props.id}`} className="note-link">
              <span className="note-name">{this.props.name}</span> Modified:{" "}
              {moment(this.props.modified).format("MM/DD/YYYY")}
            </Link>
          </h2>
        </li>
        <div className="butt-div">
          <button
            className="btn-one"
            onClick={() => {
              this.context.deleteNoteItem(this.props.id);
            }}
          >
            <span>Delete</span>
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Note);

Note.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
  folderId: PropTypes.string,
  modified: PropTypes.string,
};
