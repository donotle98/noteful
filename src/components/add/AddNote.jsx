import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class AddNote extends Component {
  render() {
    return (
      <div>
        <p>lkdsnfoifsnoefmkenf</p>
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
