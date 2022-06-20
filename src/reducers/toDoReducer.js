import * as actions from "../actions/toDoActions";

const initialState = { todos: [], searchText: "", loading: false };
export const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_TODO: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.SEARCH_TODO_SUCCESS: {
      return {
        ...state,
        todos: action.todos,
        loading: false,
      };
    }
    case actions.GET_TODO: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.GET_TODO_SUCCESS: {
      return {
        ...state,
        todos: action.todos,
        loading: false,
      };
    }
    case actions.GET_TODO_FAILURE: {
      return {
        ...state,
        todos: [],
        loading: false,
      };
    }
    default:
      return { ...state };
  }
};
