import React, { Component } from "react";
import Note from "../notes/Note";
import { Link } from "react-router-dom";
import "../assets/NotesSection.css";
import AppContext from "../../store/appContext";

class MainSection extends Component {
    static contextType = AppContext;
    render() {
        const notesList = this.context.notes.map((note) => (
            <Note
                key={note.id}
                id={note.id}
                name={note.title}
                modified={note.date_created}
                folderId={note.folder_id}
                content={note.content}
            />
        ));
        return (
            <div className='notes-section'>
                <ul className='notes-list-section'>{notesList}</ul>
                <div className='add-note-section'>
                    <Link to='/add/AddNotes' className='add-note'>
                        Add Note
                    </Link>
                </div>
            </div>
        );
    }
}

export default MainSection;
