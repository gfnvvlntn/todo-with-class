import React, { PureComponent } from "react";

interface InputProps {
  onChange?: any;
  onBlur?: any;
  placeholder?: string;
  value: string;
}

class Input extends PureComponent<InputProps, any> {
  render() {
    return (
      <input
        type="text"
        onChange={this.props.onChange}
        onBlur={this.props.onBlur}
        placeholder={this.props.placeholder}
        value={this.props.value}
      />
    );
  }
}

export default Input;
