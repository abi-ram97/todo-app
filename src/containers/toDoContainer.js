import React from "react";
import ToDo from "../components/toDo";
import { Link } from "react-router-dom";

class ToDoContainer extends React.Component {
  componentDidMount() {
    this.props.getToDos();
  }

  render() {
    const { todos, completeToDo, deleteToDo, loading } = this.props;

    return (
      <div>
        <nav>
          <Link to="/add">Click Here to Add ToDo</Link>
        </nav>

        {loading ? (
          "Getting Todos!!"
        ) : (
          <ul>
            {todos && todos.length > 0
              ? todos.map((todo) => (
                  <ToDo
                    key={todo.id}
                    completed={todo.completed}
                    text={todo.text}
                    completeToDo={() => completeToDo(todo)}
                    deleteToDo={() => deleteToDo(todo.id)}
                  />
                ))
              : "No Todos!!"}
          </ul>
        )}
      </div>
    );
  }
}

export default ToDoContainer;
