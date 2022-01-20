import React, {PureComponent} from "react";
import Input from "primitive/Input";

interface TodoItemProps {
  handleSubmit: any;
  id: number;
  title: string;
}

interface TodoItemState {
  updateTitle: string;
}

class TodoItem extends PureComponent<TodoItemProps, TodoItemState> {
  constructor(props: TodoItemProps) {
    super(props);
    this.state = {
      updateTitle: this.props.title,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({updateTitle: e.target.value});
  };

  handleBlur = () => {
    this.props.handleSubmit(this.state.updateTitle, this.props.id);
  }

  render() {
    return (
        <Input
            value={this.state.updateTitle}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
        />
    );
  }
}

export default TodoItem;
