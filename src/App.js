import React, { Component } from "react";
import { Route } from "react-router-dom";
import HeaderSection from "./components/sections/HeaderSection";
import AddFolder from "./components/folders/AddtoFolders";
import store from "./store/dummy_Store";
import FolderRoute from "./components/routes/FolderRoute";
import NoteRoute from "./components/routes/NoteRoute";

// import NotFoundPage from "./NotFoundPage";

class App extends Component {
  state = {
    store: {
      notes: [],
      folders: [],
    },
  };

  componentDidMount() {
    this.setState({ store });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" />
          <Route path="/section/:HeaderSection" component={HeaderSection} />
          <Route
            path="/folders/:folderId"
            render={() => <FolderRoute store={this.state.store} />}
          />
          <Route
            path="/notes/:id"
            render={() => <NoteRoute store={this.state.store} />}
          />
          <Route exact path="/folders/AddtoFolder" component={AddFolder} />
          <Route path="/notes/AddNote" component={AddNote} />
          <Route />
        </Switch>
      </div>
    );
  }
}

export default App;
