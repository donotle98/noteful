import React, { Component } from "react";

class MainSection extends Component {
  state = { notes: [] };
  render() {
    const notesList = this.props.store.notes.map((note) => {
      <Note
        key={note.id}
        id={note.id}
        name={note.name}
        modified={name.modified}
        folderId={name.folderId}
        content={name.content}
      />;
    });
    return (
      <div>
        <ul>{notesList}</ul>
        <button>Add note</button>
      </div>
    );
  }
}

export default MainSection;
