export const ADD_TODO = "ADD_TODO";

export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";

export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";
export const DELETE_TODO = "DELETE_TODO";
export const SEARCH_TODO = "SEARCH_TODO";
export const SEARCH_TODO_SUCCESS = "SEARCH_TODO_SUCCESS";
export const SEARCH_TODO_FAILURE = "SEARCH_TODO_FAILURE";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const GET_TODO = "GET_TODO";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_FAILURE = "GET_TODO_FAILURE";

export const addToDo = (text) => ({
  type: ADD_TODO,
  text: text,
});

export const deleteToDo = (id) => ({
  type: DELETE_TODO,
  id: id,
});

export const completeToDo = (todo) => ({
  type: COMPLETE_TODO,
  todo: todo,
});

export const searchToDo = (txt) => ({
  type: SEARCH_TODO,
  txt: txt,
});

export const getTodos = () => ({
  type: GET_TODO,
});
