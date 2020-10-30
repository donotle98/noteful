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
        folderName: "",
        noteName: "",
        noteContent: "",
        targetFolder: "",
        deleteNoteItem: () => {},
        addFolder: () => {},
        addNotes: () => {},
        handleFolderNameChange: () => {},
    };

    handleFolderNameChange = (e) => {
        let folderName = e.target.value;
        this.setState({ folderName: folderName });
    };

    getNotesFolder = (folderId) => {
        return this.state.notes.filter((note) => note.folderId === folderId);
    };
    addNotes = (note) => {
        fetch(`https://floating-hollows-01510.herokuapp.com/api/notes`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(note),
        })
            .then((res) => res.json())
            .then((newNote) => {
                const newNotes = [...this.state.notes, newNote];
                this.setState({ notes: newNotes });
            })
            .catch((e) => {
                console.log(e);
            });
    };
    addFolder = (folderName) => {
        fetch(`https://floating-hollows-01510.herokuapp.com/api/folders`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: folderName }),
        })
            .then((res) => res.json())
            .then((results) => {
                const newFolder = [...this.state.folders, results];
                this.setState({ folders: newFolder, folderName: "" });
            })
            .catch((e) => {
                console.log(e);
            });
    };
    fetchFolders = () => {
        fetch(`https://floating-hollows-01510.herokuapp.com/api/folders`, {
            method: "GET",
            headers: { "content-type": "application/json" },
        })
            .then((folder) => folder.json())
            .then((folderResponse) =>
                this.setState({ folders: folderResponse })
            );
    };

    fetchNotes = () => {
        fetch(`https://floating-hollows-01510.herokuapp.com/api/notes`, {
            method: "GET",
            headers: { "content-type": "application/json" },
        })
            .then((note) => note.json())
            .then((noteResponse) => this.setState({ notes: noteResponse }));
    };

    deleteNoteItem = (noteId) => {
        fetch(
            `https://floating-hollows-01510.herokuapp.com/api/notes/${noteId}`,
            {
                method: "DELETE",
            }
        )
            .then((note) => {
                note.json();
            })
            .then((noteResponse) => {
                const newNotes = this.state.notes.filter(
                    (note) => note.id !== noteId
                );
                this.setState({ notes: newNotes });
            })
            .catch((e) => {
                console.log(e);
            });
    };

    componentDidMount() {
        this.fetchFolders();
        this.fetchNotes();
        this.setState({
            folderName: this.state.folderName,
            deleteNoteItem: this.state.deleteNoteItem,
            addFolder: this.state.addFolder,
            addNotes: this.state.addNotes,
            handleFolderNameChange: this.state.handleFolderNameChange,
            noteName: this.state.noteName,
            noteContent: this.state.noteContent,
            targetFolder: this.state.targetFolder,
        });
    }
    getNoteInfo = (noteId) => {
        console.log(noteId);
        return this.state.notes.find((note) => note.id === noteId);
    };
    render() {
        const contextValue = {
            folders: this.state.folders,
            notes: this.state.notes,
            folderName: this.state.folderName,
            deleteNoteItem: this.deleteNoteItem,
            handleFolderNameChange: this.handleFolderNameChange,
            addFolder: this.addFolder,
            addNotes: this.addNotes,
            noteName: this.state.noteName,
            noteContent: this.state.noteContent,
            targetFolder: this.state.targetFolder,
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
                                        <NoteRoute
                                            getNoteInfo={this.getNoteInfo}
                                        />
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
