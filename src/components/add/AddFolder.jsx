import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../assets/AddToFolders.css";
import AppContext from "../../store/appContext";

class AddToFolder extends Component {
  static contextType = AppContext;
  state = {
    nameErr: "",
  };
  handleValidation = (e) => {
    e.preventDefault();
    if (this.context.folderName === "") {
      this.setState({ nameErr: "Please enter a folder name" });
    } else {
      this.context.addFolder(this.context.folderName);
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div className="add-folder-section">
        <h1 className="add-folder-header">Add folder</h1>
        <div className="sub-butt">
          <form className="add-folder-form">
            <label htmlFor="folder-input">Name: </label>
            <span className="error-message">{this.state.nameErr}</span>
            <input
              id="folder-input"
              type="text"
              name="folder"
              onChange={this.context.handleFolderNameChange}
            ></input>
            <button
              type="submit"
              className="submit-folder-button"
              onClick={(e) => {
                this.handleValidation(e);
              }}
            >
              <span>Submit</span>
            </button>
          </form>
        </div>
        <div className="back-button-div">
          <button
            onClick={() => {
              this.props.history.goBack();
            }}
            className="go-back"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(AddToFolder);
