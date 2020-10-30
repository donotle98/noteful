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
        let folderArr = [];
        //const folderArr = this.props.getNotesFolder(folderId);
        let random = this.context.notes.map((x) => {
            if (x.folder_id === folderId) {
                folderArr.push(x);
            }
        });
        console.log(folderArr);
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
                        {folderArr.map((x) => (
                            <Note
                                key={x.id}
                                id={x.id}
                                name={x.title}
                                modified={x.date_added}
                                folderId={x.folderId}
                                content={x.content}
                            ></Note>
                        ))}

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
