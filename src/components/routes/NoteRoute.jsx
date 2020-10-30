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
        let title = "";
        let content = "";
        let date = "";
        let id = 0;
        let note = this.context.notes.map((x) => {
            if (x.id == noteId) {
                id = x.id;
                title = x.title;
                content = x.content;
                date = x.date_modified;
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
                            onClick={() => {
                                this.context.deleteNoteItem(id);
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
