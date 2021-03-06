import React, { Component } from "react";
import AppContext from "../../store/appContext";
import SideBar from "../sections/SideBar";
import { withRouter, Link } from "react-router-dom";
import Note from "../notes/Note";
import PropTypes from "prop-types";

class FolderRoute extends Component {
    static contextType = AppContext;
    render() {
        const { folderId } = this.props.match.params;
        const { notes = [] } = this.context;
        return (
            <div className='float-container float-child'>
                <div className='side-bar-route'>
                    <SideBar />
                    <div className='back-button-div'>
                        <button
                            onClick={this.props.history.goBack}
                            className='go-back'
                        >
                            Go Back
                        </button>
                    </div>
                </div>
                <div className='notes-section-route'>
                    <ul className='notes-list-section'>
                        {notes.map((note) => {
                            let folder_id = note.folder_id;
                            if (folder_id == folderId) {
                                return (
                                    <Note
                                        key={note.id}
                                        id={note.id}
                                        name={note.title}
                                        modified={note.date_added}
                                        folderId={note.folderId}
                                        content={note.content}
                                    ></Note>
                                );
                            }
                        })}
                        <div className='add-note-section'>
                            <Link to='/add/AddNotes' className='add-note'>
                                Add Note
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}
export default withRouter(FolderRoute);
FolderRoute.propTypes = {
    getNotesFolder: PropTypes.func,
};
