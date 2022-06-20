import React from "react";

function ToDo(props) {
  return (
    <li style={{ textDecoration: props.completed ? "line-through" : "none" }}>
      {props.text}

      <button type="button" onClick={props.completeToDo}>
        Complete
      </button>

      <button type="button" onClick={props.deleteToDo}>
        Delete
      </button>
    </li>
  );
}
export default ToDo;
