import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import "./Button.scss";

// size may be S, L
// shadow boolean
// border may be solid, dashed, none
// color may be default, black, green, blue
// button.add?
// button.delete?
const BUTTON_SIZE_CLASS = {
  "S": "button--small",
  "M": "button--medium",
  "L": "button--large",
  "": "",
};

const BUTTON_BORDER_CLASS = {
  solid: "",
  none: "button--no-border",
  dashed: "button--dashed",
};

const BUTTON_COLOR_CLASS = {
  default: "button--default-color",
  green: "button--green",
  blue: "button--blue",
  solidBlue: "button--solid-blue",
  black: "button--black",
  gray: "button--gray",
};

export const Button = ({ className, size, children, shadow, border, color, disabled, ...rest }) => {
  const classes = classNames(
    "button",
    className,
    { "disabled": disabled },
    { "button--shadow": shadow },
    BUTTON_SIZE_CLASS[size],
    BUTTON_COLOR_CLASS[color],
    BUTTON_BORDER_CLASS[border],
  );
  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  shadow: PropTypes.bool,
  size: PropTypes.oneOf(["S", "M", "L", ""]),
  children: PropTypes.node.isRequired,
  border: PropTypes.oneOf(["solid", "dashed", "none"]),
  color: PropTypes.oneOf(["default", "green", "blue", "solidBlue", "black", "gray"]),
};

Button.defaultProps = {
  color: "default",
  className: "",
  shadow: false,
  size: "",
  border: "none",
};
