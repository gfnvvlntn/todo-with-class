import React, { PureComponent } from "react";

interface ButtonProps {
  onClick?: any;
  id?: number;
}

class Button extends PureComponent<ButtonProps> {
  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

export default Button;