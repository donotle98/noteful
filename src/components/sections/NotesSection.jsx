import React, { Component } from "react";
import Note from "../notes/Note";
import store from "../../store/dummy_Store";
import { Link } from "react-router-dom";
import "../assets/NoteSection.css";

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
      <div>
        <ul className="notes-list-section">{notesList}</ul>
        <Link to="/add/AddNotes" className="add-note">
          <div className="add-note">Add Note</div>
        </Link>
      </div>
    );
  }
}

export default MainSection;
