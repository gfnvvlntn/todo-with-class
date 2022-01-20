import React, { PureComponent } from "react";
import styles from "./createTodoForm.module.css";
import Input from "primitive/Input";
import { TodoItemTypes } from "types";

interface CreateTodoFormState {
  newTitle: string;
}

interface CreateTodoFormProps {
  createTodoItem: (value: TodoItemTypes) => void;
}

class CreateTodoForm extends PureComponent<
  CreateTodoFormProps,
  CreateTodoFormState
> {
  constructor(props: CreateTodoFormProps) {
    super(props);
    this.state = {
      newTitle: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTitle: e.target.value });
  };

  handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!this.state.newTitle) return;
    this.props.createTodoItem({
      id: new Date().getTime(),
      title: this.state.newTitle,
      isDone: false,
    });
    this.setState({ newTitle: "" });
  };

  render() {
    return (
      <div>
        <h2>create a record</h2>
        <form onSubmit={this.handlerSubmit} className={styles.formItem}>
          <Input
            placeholder={"enter todo"}
            value={this.state.newTitle}
            onChange={this.handleChange}
          />
          <button>create</button>
        </form>
        <hr />
      </div>
    );
  }
}

export default CreateTodoForm;
