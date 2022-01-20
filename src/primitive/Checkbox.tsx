import React, { PureComponent } from "react";

interface CheckboxProps {
  onChange?: any;
  onClick?: any;
  id?: number;
  checked: boolean;
}

class Checkbox extends PureComponent<CheckboxProps> {
  render() {
    return (
      <input
        type="checkbox"
        id={this.props.id?.toString()}
        checked={this.props.checked}
        onChange={this.props.onChange}
        onClick={this.props.onClick}
      />
    );
  }
}

export default Checkbox;
