import React, { PureComponent } from "react";
import Button from "primitive/Button";
import styles from "./todoItemList.module.css";
import Checkbox from "primitive/Checkbox";
import EditTodo from "./EditTodo";
import { TodoItemTypes } from "types";

interface TodoListProps {
  todoElement: TodoItemTypes;
  editTodoItem: (updateTitle: string, id: number) => void;
  selectTodoItem: (checked: boolean, id: number) => void;
  deleteTodoItem: (id: number) => void;
}

class TodoItem extends PureComponent<TodoListProps> {
  handleTodoItemSubmit = (updateTitle: string, id: number) => {
    this.props.editTodoItem(updateTitle, id);
  };

  handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.selectTodoItem(e.target.checked, Number(e.target.id));
  };

  handleClick = () => {
    this.props.deleteTodoItem(this.props.todoElement.id);
  };

  render() {
    return (
      <li className={styles.todoItemList}>
        <>
          <EditTodo
            handleSubmit={this.handleTodoItemSubmit}
            id={this.props.todoElement.id}
            title={this.props.todoElement.title}
          />
        </>
        <div className={styles.todoButton}>
          <Checkbox
            onChange={this.handleCheckboxChange}
            id={this.props.todoElement.id}
            checked={this.props.todoElement.isDone}
          />
          <Button onClick={this.handleClick}>delete</Button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
