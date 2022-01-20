import React, { PureComponent } from "react";
import styles from "./todo.module.css";
import { TodoLogicProps } from "types";

import CreateTodoForm from "form/CreateTodoForm";
import BodyTodos from "component/BodyTodos";
import TodoList from "component/todo-list/TodoList";

class Todos extends PureComponent<TodoLogicProps, {}> {
  render() {
    return (
      <div className={styles.container}>
        <CreateTodoForm createTodoItem={this.props.createTodoItem} />
        <BodyTodos
          selectAllTodoItem={this.props.selectAllTodoItem}
          deleteAllSelectTodoItem={this.props.deleteAllSelectTodoItem}
        />
        <TodoList
          todoList={this.props.todoList}
          selectTodoItem={this.props.selectTodoItem}
          deleteTodoItem={this.props.deleteTodoItem}
          editTodoItem={this.props.editTodoItem}
        />
      </div>
    );
  }
}

export default Todos;
