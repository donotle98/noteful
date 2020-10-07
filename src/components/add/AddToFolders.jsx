import React, { Component } from "react";
class AddToFolder extends Component {
  render() {
    return (
      <div className="add-folder-section">
        <h1 className="add-folder-header">Add folder</h1>
        <div>
          <form className="add-folder-form">
            <label htmlFor="folder-input">Name: </label>
            <input id="folder-input" type="text"></input>
            <button className="submit-folder-button">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddToFolder;
