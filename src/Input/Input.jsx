import React, { useMemo } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";
import PropTypes from "prop-types";

import { InputGroup } from "./InputGroup/";
import { InputDate } from "./InputDate/";
import { AutoSizeInput } from "./AutoSizeInput/";
import { InputList } from "./InputList/";

import "./Input.scss";

const Input = React.memo (({ className, modificators, title, id, onChange, value, name, ...rest }) => {
  const val = useMemo(() => {
    if (value === null) {
      return undefined;
    }
    return typeof value === "string" ? value : value[name];
  }, [value]);
  const newId = useMemo(() => id || uuid(), []);
  const classes = clsx("input", className, { [`${modificators}`]: modificators });

  return (
    <label className={classes}>
      <p className="input__title" htmlFor={newId}>
        {title}
      </p>
      <input value={val} onChange={onChange} id={newId} name={name} {...rest} />
    </label>
  );
});

export default Input;

Input.InputGroup = InputGroup;
Input.InputDate = InputDate;
Input.AutoSizeInput = AutoSizeInput;
Input.InputList = InputList;

Input.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
};

Input.defaultProps = {
  className: "",
  title: "",
  id: "",
  name: "",
  value: null,
  onChange: () => {},
};
