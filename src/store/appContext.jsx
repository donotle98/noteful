import React from "react";

const AppContext = React.createContext({
  folders: [],
  notes: [],
  folderId: null,
  noteId: null,
  addFolder: () => {},
  addNote: () => {},
  deleteNote: () => {},
});

export default AppContext;
