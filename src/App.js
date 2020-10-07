import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderSection from "./components/sections/HeaderSection";
import HomeRoute from "./components/routes/HomeRoute";
import FolderRoute from "./components/routes/FolderRoute";
import AddNote from "./components/add/AddNote";
import AddToFolders from "./components/add/AddToFolders";
import NoteRoute from "./components/routes/NoteRoute";
import store from "./store/dummy_Store";
import "./components/assets/App.css";

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
                <AddToFolders folder={this.state.store.folders} />
              </Route>

              <Route path="/add/AddNotes" exact>
                <AddNote notes={this.state.store.notes} />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
