import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import classNames from "classnames";

import { RadioGroup } from "./RadioGroup/";

import "./RadioButton.scss";

export const RadioButton = ({ className, text, noBorder, disabled, id, ...rest }) => {
  const newId = useMemo(() => id || uuid(), []);
  const classes = classNames(
    "radio-button",
    className,
    { "radio-button--noborder": noBorder },
    { "radio-button--disabled": disabled },
  );

  return (
    <label className={classes}>
      <input type="radio" className="visually-hidden" id={newId} {...rest} />
      <div className="radio-button-box">
        <span className="radio-button__circle"></span>
      </div>
      <span className="radio-button__text" htmlFor={newId}>
        {text}
      </span>
    </label>
  );
};

export default RadioButton;

RadioButton.RadioGroup = RadioGroup;

RadioButton.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  text: PropTypes.string,
  id: PropTypes.string,
  noBorder: PropTypes.bool,
  disabled: PropTypes.bool,
};

RadioButton.defaultProps = {
  className: "",
  onChange: () => {},
  text: "",
  id: "",
  noBorder: false,
  disabled: false,
};
