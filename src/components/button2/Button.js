import React, { Component } from "react";
import cx from "classnames";
import styles from "./Button.module.css"; // Import css modules stylesheet as styles
import "./another-stylesheet.css"; // Import regular stylesheet

class Button extends Component {
  render() {
    // reference as a js object
    return (
      <button
        className={cx("error", styles.error, styles.padding, styles.width)}
      >
        Error Button
      </button>
    );
  }
}

export default Button;
