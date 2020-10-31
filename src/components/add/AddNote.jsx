import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AppContext from "../../store/appContext";
import "../assets/AddNote.css";
import FolderSelects from "../add/FolderSelects";

class AddNote extends Component {
    state = {
        nameValid: false,
        name: "",
        validationMsg: {
            name: "",
        },
    };
    static contextType = AppContext;

    validateName(fieldValue) {
        const fieldErrors = { ...this.state.validationMsg };
        let hasError = false;

        fieldValue = fieldValue.trim();
        if (fieldValue.length === 0) {
            fieldErrors.name = "Value is required";
            hasError = true;
        }
        this.setState(
            {
                validationMsg: fieldErrors,
                nameValid: !hasError,
            },
            this.formValid
        );
    }

    formValid = () => {
        this.setState({
            formValid: this.state.nameValid,
        });
    };

    updateName = (name) => {
        this.setState({ name }, () => {
            this.validateName(name);
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const note = {
            name: e.target["note-name"].value,
            content: e.target["note-content"].value,
            folder_id: e.target["note-folder-id"].value,
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
                        <input id='note-input-name' name='note-name' required />
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
