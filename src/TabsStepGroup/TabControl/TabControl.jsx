import React from "react";
import PropTypes from "prop-types";

import { Button } from "../../Button/Button";

import "./TabControl.scss";

const TabControl = ({ disabled, shadow, className, text, ...rest }) => {
  return (
    <Button
      size="M"
      border={`${disabled ? "solid" : "none"}`}
      className={`tab-control ${className || ""}`}
      shadow={!disabled}
      disabled={disabled}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default React.memo(TabControl)

TabControl.propTypes = {
  text: PropTypes.string.isRequired,
};

TabControl.defaultProps = {
  className: "",
  disabled: false,
};
