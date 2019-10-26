import React, { Component } from "react";
import "./Button.css"; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <button className="Button" {...this.props} />;
  }
}

export default Button;
