import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";
import AppContext from "../../store/appContext";
import PropTypes from "prop-types";

class Note extends Component {
    static contextType = AppContext;
    handleClickDelete = (e) => {
        e.preventDefault();
        console.log("delete pressed");
        const noteId = this.props.id;
        fetch(`https://arcane-river-47535.herokuapp.com/api/notes/${noteId}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((e) => Promise.reject(e));
                }
                return res.json();
            })
            .then((resJson) => {
                console.log(resJson.noteId);
                this.context.handleDeleteNote(resJson.noteId);
                this.props.history.push("/");
            })
            .catch((e) => {
                console.log("delete note", { e });
            });
    };
    render() {
        return (
            <div className='note-div'>
                <li>
                    <h2>
                        <Link
                            to={`/notes/${this.props.id}`}
                            className='note-link'
                        >
                            <span className='note-name'>{this.props.name}</span>{" "}
                            Modified:{" "}
                            {moment(this.props.modified).format("MM/DD/YYYY")}
                        </Link>
                    </h2>
                </li>
                <div className='butt-div'>
                    <button
                        className='btn-one'
                        onClick={this.handleClickDelete}
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
    id: PropTypes.number,
    name: PropTypes.string,
    content: PropTypes.string,
    folderId: PropTypes.number,
    modified: PropTypes.string,
};
