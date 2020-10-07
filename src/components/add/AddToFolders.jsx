import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../assets/AddToFolders.css";

class AddToFolder extends Component {
  render() {
    return (
      <div className="add-folder-section">
        <h1 className="add-folder-header">Add folder</h1>
        <div className="sub-butt">
          <form className="add-folder-form">
            <label htmlFor="folder-input">Name: </label>
            <input id="folder-input" type="text"></input>
            <div>
              <button className="submit-folder-button">
                <span>Submit</span>
              </button>
            </div>
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

export default withRouter(AddToFolder);
