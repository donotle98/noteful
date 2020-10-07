import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderSection from "./components/sections/HeaderSection";
import HomeRoute from "./components/routes/HomeRoute";
import FolderRoute from "./components/routes/FolderRoute";
import AddNote from "./components/add/AddNote";
import AddToFolders from "./components/add/AddToFolders";
import "./components/assets/App.css";
import NoteRoute from "./components/routes/NoteRoute";
import store from "./store/dummy_Store";

class App extends Component {
  state = {
    store: store,
  };

  findFolder = (noteId) => {
    const note = this.state.store.notes.find((note) => note.id === noteId);
    const folder = this.state.store.folders.find(
      (folder) => folder.id === note.folderId
    );
    return folder;
  };

  getNotesFolder = (folderId) => {
    return this.state.store.notes.filter((note) => note.folderId === folderId);
  };

  getNoteInfo = (noteId) => {
    return this.state.store.notes.find((note) => note.id === noteId);
  };

  render() {
    return (
      <>
        <Router>
          <div>
            <HeaderSection />
            <Switch>
              <Route path="/" exact>
                <HomeRoute />
              </Route>

              <Route path="/notes/:noteId">
                <NoteRoute
                  folder={this.state.store.folders}
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
          </div>
        </Router>
      </>
    );
  }
}

export default App;
