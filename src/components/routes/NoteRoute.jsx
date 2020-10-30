import React, { Component } from "react";
import AppContext from "../../store/appContext";
import { withRouter } from "react-router-dom";
import moment from "moment";
import "../assets/NoteRoute.css";
import PropTypes from "prop-types";

class NoteRoute extends Component {
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
            })
            .catch((e) => {
                console.log("delete note", { e });
            });
    };
    render() {
        const { noteId } = this.props.match.params;
        const { notes = [] } = this.context;
        let title = "";
        let content = "";
        let date = "";
        let id = 0;
        notes.map((x) => {
            if (x.id == noteId) {
                id = x.id;
                title = x.title;
                content = x.content;
                date = x.date_created;
            }
        });

        return (
            <div className='float-container float-child'>
                <div className='notes-section-route float-child'>
                    <ul className='note-item'>
                        <li>
                            <h2>{title}</h2>
                            <h3 className='date-modified'>
                                Modified: {moment(date).format("MM/DD/YYYY")}
                            </h3>
                            <p>{content}</p>
                        </li>
                    </ul>
                    <div className='note-div'>
                        <button
                            className='btn-one'
                            onClick={(e) => {
                                this.handleClickDelete(e);
                                this.props.history.goBack();
                            }}
                        >
                            <span>Delete</span>
                        </button>
                    </div>
                    <div className='note-route-back'>
                        <button
                            onClick={this.props.history.goBack}
                            className='go-back'
                        >
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
