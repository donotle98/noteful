import React, { Component } from "react";
import Note from "../notes/Note";
import store from "../../store/dummy_Store";
import { Link } from "react-router-dom";
import "../assets/NotesSection.css";

class MainSection extends Component {
  render() {
    const notesList = store.notes.map((note) => (
      <Note
        key={note.id}
        id={note.id}
        name={note.name}
        modified={note.modified}
        folderId={note.folderId}
        content={note.content}
      />
    ));
    return (
      <div className="notes-section">
        <ul className="notes-list-section">{notesList}</ul>
        <div className="add-note-section">
          <Link to="/add/AddNotes" className="add-note">
            Add Note
          </Link>
        </div>
      </div>
    );
  }
}

export default MainSection;