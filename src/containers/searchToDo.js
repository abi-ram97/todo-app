import React from "react";
import { connect } from "react-redux";
import { searchToDo } from "../actions/toDoActions";

class SearchToDo extends React.Component {
  render() {
    return (
      <div>
        <p>Search Here</p>

        <input
          type="text"
          onChange={(e) => this.props.dispatch(searchToDo(e.target.value))}
        />
      </div>
    );
  }
}

export default connect()(SearchToDo);
