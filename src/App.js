import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderSection from "./components/sections/HeaderSection";
import HomeRoute from "./components/routes/HomeRoute";
import FolderRoute from "./components/routes/FolderRoute";
import AddNote from "./components/add/AddNote";
import AddToFolders from "./components/add/AddToFolders";
import NoteRoute from "./components/routes/NoteRoute";
import "./components/assets/App.css";
import AppContext from "./store/appContext";

class App extends Component {
  state = {
    folders: [],
    notes: [],
    deleteNoteItem: () => {},
  };

  findFolder = (noteId) => {
    const note = this.state.notes.find((note) => note.id === noteId);
    const folder = this.state.folders.find(
      (folder) => folder.id === note.folderId
    );
    return folder;
  };

  getNotesFolder = (folderId) => {
    return this.state.notes.filter((note) => note.folderId === folderId);
  };

  getNoteInfo = (noteId) => {
    return this.state.notes.find((note) => note.id === noteId);
  };
  fetchFolders = () => {
    fetch(`http://localhost:9090/folders`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((folder) => folder.json())
      .then((folderResponse) => this.setState({ folders: folderResponse }));
  };

  fetchNotes = () => {
    fetch(`http://localhost:9090/notes`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((note) => note.json())
      .then((noteResponse) => this.setState({ notes: noteResponse }));
  };

  deleteNoteItem = (noteId) => {
    const newNotes = this.state.notes.filter((note) => note.id !== noteId);
    this.setState({ notes: newNotes });
  };

  componentDidMount() {
    this.fetchFolders();
    this.fetchNotes();
    this.setState({
      deleteNoteItem: this.state.deleteNoteItem,
    });
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNoteItem: this.deleteNoteItem,
    };
    return (
      <>
        <Router>
          <div>
            <HeaderSection />

            <AppContext.Provider value={contextValue}>
              <Switch>
                <Route path="/" exact>
                  <HomeRoute />
                </Route>

                <Route path="/notes/:noteId">
                  <NoteRoute
                    getNoteInfo={this.getNoteInfo}
                    findFolder={this.findFolder}
                  />
                </Route>

                <Route path="/folder/:folderId">
                  <FolderRoute getNotesFolder={this.getNotesFolder} />
                </Route>

                <Route path="/add/AddToFolders" exact>
                  <AddToFolders />
                </Route>

                <Route path="/add/AddNotes" exact>
                  <AddNote />
                </Route>
              </Switch>
            </AppContext.Provider>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
