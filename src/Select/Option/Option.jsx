import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { useSelect } from "../SelectContext";

import "./Option.scss";

export const Option = ({ className, modificators, value, title, disabled }) => {
  const classes = classNames("option", className, modificators, { disabled: disabled });
  const { onChange, onSelect, setValue, dispatch, name, inputValue, setInputValue } = useSelect();

  const handleOnClick = () => {
    setInputValue(title);
    onChange({ name, value });
    onSelect({ name, value });
    setValue(value);
    dispatch();
  };

  return title.includes(inputValue) ? (
    <div className={classes} onClick={handleOnClick}>
      {title}
    </div>
  ) : null;
};

Option.propTypes = {
  className: PropTypes.string,
  modificators: PropTypes.string,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Option.defaultProps = {
  className: "",
  disabled: false,
  modificators: "",
};
