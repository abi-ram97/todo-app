import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { Switch, Route } from "react-router-dom";
import { toDoReducer } from "./reducers/toDoReducer";
import AddToDo from "./containers/addToDo";
import SearchToDo from "./containers/searchToDo";
import VisibleToDo from "./containers/visibleToDo";
import rootSaga from "./sagas/toDoSaga";
import "./App.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(toDoReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <div>
      <Provider store={store}>
        <p>My App</p>

        <Switch>
          <Route exact path="/" component={VisibleToDo}></Route>

          <Route path="/add">
            <AddToDo />{" "}
          </Route>
        </Switch>

        <SearchToDo />
      </Provider>
    </div>
  );
}

export default App;
