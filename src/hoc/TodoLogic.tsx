import React, { ComponentType, PureComponent } from "react";
import { TodoItemTypes, TodoLogicProps } from "types";

interface TodoState {
  todoList: TodoItemTypes[];
}

export function TodoLogic(WrappedComponent: ComponentType<TodoLogicProps>) {
  return class extends PureComponent<{}, TodoState> {
    constructor(props: TodoItemTypes[]) {
      super(props);
      this.state = {
        todoList: [],
      };
    }

    createTodoItem = (newItem: TodoItemTypes): void => {
      this.setState((prev) => ({
        todoList: [{ ...newItem }, ...prev.todoList],
      }));
    };

    deleteAllSelectTodoItem = (): void => {
      this.setState((prev) => {
        const filteredTodos = prev.todoList.filter((el) => !el.isDone);
        return filteredTodos.length === prev.todoList.length
          ? prev
          : { todoList: filteredTodos };
      });
    };

    selectAllTodoItem = (checked: boolean): void => {
      this.setState((prev) => ({
        todoList: [...prev.todoList].map((el) => {
          return { ...el, isDone: !checked };
        }),
      }));
    };

    editTodoItem = (newTitle: string, id: number): void => {
      this.setState((prev) => ({
        todoList: [...prev.todoList].map((el) => {
          if (el.id === id) {
            return { ...el, title: newTitle };
          }
          return el;
        }),
      }));
    };

    deleteTodoItem = (index: number): void => {
      this.setState((prev) => ({
        todoList: [...prev.todoList].filter((el) => el.id !== index),
      }));
    };

    selectTodoItem = (checked: boolean, id: number): void => {
      this.setState((prev) => ({
        todoList: [...prev.todoList].map((el) => {
          if (el.id === id) {
            return { ...el, isDone: checked };
          }
          return el;
        }),
      }));
    };

    render() {
      return (
        <WrappedComponent
          todoList={this.state.todoList}
          createTodoItem={this.createTodoItem}
          deleteAllSelectTodoItem={this.deleteAllSelectTodoItem}
          selectAllTodoItem={this.selectAllTodoItem}
          editTodoItem={this.editTodoItem}
          deleteTodoItem={this.deleteTodoItem}
          selectTodoItem={this.selectTodoItem}
        />
      );
    }
  };
}
