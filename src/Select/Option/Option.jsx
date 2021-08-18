import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { useSelect } from "../SelectContext";

import "./Option.scss";

const Option = ({ className, modificators, value, title, disabled }) => {
  const classes = clsx("option", className, modificators, { disabled: disabled });
  const { onChange, onSelect, setValue, dispatch, name, inputValue, setInputValue } = useSelect();

  const handleOnClick = () => {
    if(!disabled) {
      setInputValue(title);
      onChange({ name, value });
      onSelect({ name, value });
      setValue(value);
      dispatch();
    }
    
  };

  return title.includes(inputValue) ? (
    <div className={classes} onClick={handleOnClick}>
      {title}
    </div>
  ) : null;
};

export default React.memo(Option)

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
