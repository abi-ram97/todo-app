import { all, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/toDoActions";

const TODO_URL = "http://localhost:3004/todos";

function* addToDo(action) {
  const data = {
    text: action.text,
    completed: false,
  };
  try {
    const response = yield fetch(TODO_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json);

    yield put({ type: actions.ADD_TODO_SUCCESS, todo: response });
  } catch (e) {
    console.log(e);
    yield put({ type: actions.ADD_TODO_FAILURE });
  }
}

function* deleteToDo(action) {
  const url = `${TODO_URL}/${action.id}`;
  yield fetch(url, {
    method: "DELETE",
  }).then((response) => response.json());

  yield put({ type: actions.GET_TODO });
}

function* completeToDo(action) {
  const url = `${TODO_URL}/${action.todo.id}`;
  const data = {
    text: action.todo.text,
    completed: true,
  };
  yield fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => console.log(res));

  yield put({ type: actions.GET_TODO });
}

function* searchToDo(action) {
  const url = `${TODO_URL}?text_like=${action.txt}`;
  try {
    const response = yield fetch(url).then((response) => response.json());
    yield put({ type: actions.SEARCH_TODO_SUCCESS, todos: response });
  } catch (e) {
    yield put({ type: actions.GET_TODO });
  }
}

function* getToDos(action) {
  try {
    const response = yield fetch(TODO_URL).then((response) => response.json());
    yield put({ type: actions.GET_TODO_SUCCESS, todos: response });
  } catch (e) {
    yield put({ type: actions.GET_TODO_FAILURE });
  }
}

export function* addToDoSaga() {
  yield takeEvery(actions.ADD_TODO, addToDo);
}

export function* getToDoSaga() {
  yield takeEvery(actions.GET_TODO, getToDos);
}

export function* deleteToDoSaga() {
  yield takeEvery(actions.DELETE_TODO, deleteToDo);
}

export function* completeToDoSaga() {
  yield takeEvery(actions.COMPLETE_TODO, completeToDo);
}

export function* searchToDoSaga() {
  yield takeEvery(actions.SEARCH_TODO, searchToDo);
}

export default function* rootSaga() {
  yield all([
    addToDoSaga(),
    getToDoSaga(),
    deleteToDoSaga(),
    completeToDoSaga(),
    searchToDoSaga(),
  ]);
}
