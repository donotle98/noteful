import React from "react";

const AppContext = React.createContext({
    folders: [],
    notes: [],
    folderName: "",
    noteName: "",
    noteContent: "",
    targetFolder: "",
    deleteNote: () => {},
    addFolder: () => {},
    addNotes: () => {},
    handleFolderNameChange: () => {},
});

export default AppContext;
