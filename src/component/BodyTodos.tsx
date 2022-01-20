import React, { PureComponent } from "react";
import styles from "./bodyTodo.module.css";
import Checkbox from "primitive/Checkbox";
import Button from "primitive/Button";

interface BodyTodosState {
  isChecked: boolean;
}

interface BodyTodosProps {
  deleteAllSelectTodoItem: () => void;
  selectAllTodoItem: (checked: boolean) => void;
}

class BodyTodos extends PureComponent<BodyTodosProps, BodyTodosState> {
  constructor(props: BodyTodosProps) {
    super(props);
    this.state = { isChecked: false };
  }

  handleChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  handleInputClick = () => {
    this.props.selectAllTodoItem(this.state.isChecked);
  };

  handleButtonClick = () => {
    this.props.deleteAllSelectTodoItem();
    if (this.state.isChecked) {
      this.setState({ isChecked: !this.state.isChecked });
    }
  };

  render() {
    return (
      <>
        <div className={styles.content}>
          <h2>todo list</h2>
          <div className={styles.title}>
            <Checkbox
              checked={this.state.isChecked}
              onChange={this.handleChange}
              onClick={this.handleInputClick}
            />
            <Button onClick={this.handleButtonClick}>delete all done</Button>
          </div>
        </div>
        <hr />
      </>
    );
  }
}

export default BodyTodos;
