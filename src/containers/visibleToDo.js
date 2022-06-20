import { connect } from "react-redux";
import * as actions from "../actions/toDoActions";
import ToDoContainer from "./toDoContainer";

const mapStateToProps = (state) => ({
  todos: state.todos,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  completeToDo: (todo) => dispatch(actions.completeToDo(todo)),
  deleteToDo: (id) => dispatch(actions.deleteToDo(id)),
  getToDos: () => dispatch(actions.getTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer);
