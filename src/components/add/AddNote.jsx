import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AppContext from "../../store/appContext";
import "../assets/AddNote.css";
import FolderSelects from "../add/FolderSelects";

class AddNote extends Component {
  state = {
    nameErr: "",
  };
  static contextType = AppContext;
  handleNameChange = (e) => {
    this.context.noteName = e.target.value;
  };
  handleTargetFolder = (e) => {
    console.log(e.target.value);
    this.context.targetFolder = e.target.value;
  };
  handleNoteContent = (e) => {
    this.context.noteContent = e.target.value;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let name = this.context.noteName;
    let content = this.context.noteContent;
    let folderId = this.context.targetFolder;
    let modified = new Date().toISOString();
    if (name === "") {
      this.setState({ nameErr: "Please enter a note name" });
    } else {
      this.context.addNotes({ name, content, folderId, modified });
      this.props.history.goBack();
    }
  };
  handleRequired = () => {
    return "NEED STUFF";
  };
  render() {
    const folderSelects = this.context.folders.map((x) => (
      <FolderSelects key={x.id} value={x.id} name={x.name} />
    ));
    return (
      <div className="add-note-div">
        <h1 className="add-note-header">Add note</h1>
        <div className="button-style">
          <form className="add-note-form">
            <label htmlFor="note-input-name">Name:</label>
            <span className="error-message">{this.state.nameErr}</span>
            <input
              id="note-input-name"
              name="name"
              onChange={this.handleNameChange}
              required
            />
            <div>
              <select
                className="select-folder"
                onChange={this.handleTargetFolder}
                required
              >
                <option value hidden>
                  Select a folder:
                </option>
                {folderSelects}
              </select>
            </div>
            <label htmlFor="content-input">Content:</label>
            <textarea
              id="content-input"
              onChange={this.handleNoteContent}
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
        <div className="back-button-div">
          <button onClick={this.props.history.goBack} className="go-back">
            Go Back
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(AddNote);
