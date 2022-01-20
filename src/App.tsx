import React, { Component } from "react";
import "./App.css";
import Todos from "pages/todos/Todos";
import { TodoLogic } from "./hoc/TodoLogic";

const TodoWithLogic = TodoLogic(Todos);

class App extends Component {
  render() {
    return (
      <div className="container">
        <TodoWithLogic />
      </div>
    );
  }
}

export default App;
