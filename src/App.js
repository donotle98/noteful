import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderSection from "./components/sections/HeaderSection";
import HomeRoute from "./components/routes/HomeRoute";
import FolderRoute from "./components/routes/FolderRoute";
import AddNote from "./components/add/AddNote";
import AddToFolders from "./components/add/AddFolder";
import NoteRoute from "./components/routes/NoteRoute";
import "./components/assets/App.css";
import AppContext from "./store/appContext";
import NotFoundPage from "./NotFoundPage";
import ErrorBoundary from "./components/Error/ErrorBoundary";

class App extends Component {
    state = {
        folders: [],
        notes: [],
    };
    updateList = () => {
        Promise.all([
            fetch(`https://arcane-river-47535.herokuapp.com/api/notes`),
            fetch(`https://arcane-river-47535.herokuapp.com/api/folders`),
        ])
            .then(([notesRes, foldersRes]) => {
                if (!notesRes.ok)
                    return notesRes.json().then((e) => Promise.reject(e));
                if (!foldersRes.ok)
                    return foldersRes.json().then((e) => Promise.reject(e));

                return Promise.all([notesRes.json(), foldersRes.json()]);
            })
            .then(([notes, folders]) => {
                this.setState({ notes, folders });
            })
            .catch((error) => {
                console.error({ error });
            });
    };
    handleAddFolder = (folder) => {
        this.setState({
            folders: [...this.state.folders, folder],
        });
    };

    handleAddNote = (note) => {
        this.setState({
            notes: [...this.state.notes, note],
        });
    };
    handleDeleteNote = (noteId) => {
        this.updateList();
    };

    componentDidMount() {
        this.updateList();
    }
    render() {
        const contextValue = {
            notes: this.state.notes,
            folders: this.state.folders,
            deleteNote: this.handleDeleteNote,
            addFolder: this.handleAddFolder,
            addNote: this.handleAddNote,
        };
        return (
            <>
                <Router>
                    <div>
                        <HeaderSection />

                        <AppContext.Provider value={contextValue}>
                            <Switch>
                                <Route path='/' exact>
                                    <ErrorBoundary
                                        message={"could not load home page"}
                                    >
                                        <HomeRoute />
                                    </ErrorBoundary>
                                </Route>

                                <Route path='/notes/:noteId'>
                                    <ErrorBoundary
                                        message={"could not load note page"}
                                    >
                                        <NoteRoute />
                                    </ErrorBoundary>
                                </Route>

                                <Route path='/folder/:folderId'>
                                    <ErrorBoundary
                                        message={"could not load folder page"}
                                    >
                                        <FolderRoute
                                            getNotesFolder={this.getNotesFolder}
                                        />
                                    </ErrorBoundary>
                                </Route>

                                <Route path='/add/AddToFolders' exact>
                                    <ErrorBoundary
                                        message={
                                            "could not load add folder page"
                                        }
                                    >
                                        <AddToFolders />
                                    </ErrorBoundary>
                                </Route>

                                <Route path='/add/AddNotes' exact>
                                    <ErrorBoundary
                                        message={"could not load add note page"}
                                    >
                                        <AddNote />
                                    </ErrorBoundary>
                                </Route>
                                <Route>
                                    <ErrorBoundary
                                        message={
                                            "could not load not found page"
                                        }
                                    >
                                        <NotFoundPage />
                                    </ErrorBoundary>
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
