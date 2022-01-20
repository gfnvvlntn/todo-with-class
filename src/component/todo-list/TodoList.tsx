import React, { PureComponent } from "react";
import TodoItem from "./TodoItem";
import { TodoItemTypes } from "types";

interface TodoListProps {
  todoList: TodoItemTypes[];
  editTodoItem: (newTitle: string, id: number) => void;
  deleteTodoItem: (index: number) => void;
  selectTodoItem: (checked: boolean, id: number) => void;
}

class TodoList extends PureComponent<TodoListProps> {
  render() {
    return (
      <ul>
        {this.props.todoList.map((el) => {
          return (
            <TodoItem
              editTodoItem={this.props.editTodoItem}
              deleteTodoItem={this.props.deleteTodoItem}
              selectTodoItem={this.props.selectTodoItem}
              key={el.id}
              todoElement={el}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
