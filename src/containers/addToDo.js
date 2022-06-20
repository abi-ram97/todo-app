import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToDo } from "../actions/toDoActions";

class AddToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: "" };
  }

  handleChange = (value) => this.setState({ input: value });

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.input.trim()) return;
    this.props.dispatch(addToDo(this.state.input));
    this.setState({ input: "" });
    e.target.todo.value = "";
  };
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <input
            type="text"
            name="todo"
            onChange={(e) => {
              this.handleChange(e.target.value);
            }}
          />

          <button type="submit">Add</button>
        </form>

        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default connect()(AddToDo);
