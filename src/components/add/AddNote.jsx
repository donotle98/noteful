import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AppContext from "../../store/appContext";
import "../assets/AddNote.css";
import FolderSelects from "../add/FolderSelects";

class AddNote extends Component {
    state = {
        nameErr: "",
        title: "",
        folder_id: 0,
        content: "",
    };
    static contextType = AppContext;

    handleName = (e) => {
        this.setState({
            title: e.target.value,
        });
    };
    handleTargetFolder = (e) => {
        this.setState({
            folder_id: e.target.value,
        });
    };
    handleContent = (e) => {
        this.setState({
            content: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title === "") {
            this.setState({
                nameErr: "Please enter a name",
            });
        }
        const note = {
            title: this.state.title,
            content: this.state.content,
            folder_id: this.state.folder_id,
            created_date: new Date(),
        };
        this.context.addNote(note);
        this.props.history.goBack();
    };
    render() {
        const folderSelects = this.context.folders.map((x) => (
            <FolderSelects key={x.id} value={x.id} name={x.name} />
        ));
        return (
            <div className='add-note-div'>
                <h1 className='add-note-header'>Add note</h1>
                <div className='button-style'>
                    <form className='add-note-form'>
                        <label htmlFor='note-input-name'>Name:</label>
                        <span className='error-message'>
                            {this.state.nameErr}
                        </span>
                        <input
                            id='note-input-name'
                            name='note-name'
                            onChange={this.handleName}
                            required
                        />
                        <div>
                            <select
                                className='select-folder'
                                onChange={this.handleTargetFolder}
                                name='note-folder-id'
                                required
                            >
                                <option value hidden>
                                    Select a folder:
                                </option>
                                {folderSelects}
                            </select>
                        </div>
                        <label htmlFor='content-input'>Content:</label>
                        <textarea
                            id='content-input'
                            name='note-content'
                            required
                            onChange={this.handleContent}
                        ></textarea>
                        <button
                            onClick={(e) => {
                                this.handleSubmit(e);
                            }}
                        >
                            <span>Submit</span>
                        </button>
                    </form>
                </div>
                <div className='back-button-div'>
                    <button
                        onClick={this.props.history.goBack}
                        className='go-back'
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(AddNote);
