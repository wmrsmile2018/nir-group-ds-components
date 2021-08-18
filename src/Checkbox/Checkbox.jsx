import React, { useRef, useMemo } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";
import PropTypes from "prop-types";

import { CheckboxContainer } from "./CheckboxContainer/";
import { CheckboxGroup } from "./CheckboxGroup/";
import "./Checkbox.scss";


const Checkbox = React.memo(function({
  className,
  isLeft,
  title,
  name,
  onChange,
  checked,
  value,
  modificators,
  id,
  disabled,
}){
  const flag = useMemo(() => (checked ? "active" : "inactive"), []);
  const newId = useMemo(() => id || uuid(), []);
  const inputRef = useRef(null);
  const classes = clsx(
    "checkbox",
    className,
    { isLeft: isLeft },
    { isRight: !isLeft },
    { disabled: disabled },
    modificators,
  );

  const handleOnClick = () => {
    inputRef.current.click();
  };

  // const handleOnChange = () => {
  //   onChange(!checked);
  // };

  // const handleOnChange = (evt) => {
  //   onChange(evt);
  // };

  return (
    <div className={classes}>
      {isLeft && <label htmlFor={newId}>{title}</label>}
      <div className={`checkbox__box ${flag}`} onClick={handleOnClick}>
        <span></span>
        <input
          type="checkbox"
          checked={checked}
          ref={inputRef}
          onChange={onChange}
          value={value}
          name={name}
          id={newId}
          disabled={disabled}
        />
      </div>
      {!isLeft && <label htmlFor={newId}>{title}</label>}
    </div>
  );
})

export default Checkbox;

Checkbox.CheckboxContainer = CheckboxContainer;
Checkbox.CheckboxGroup = CheckboxGroup;

Checkbox.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  isLeft: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  modificators: PropTypes.string,
};

Checkbox.defaultProps = {
  className: "",
  title: "",
  name: "",
  modificators: "",
  isLeft: false,
  checked: false,
  onChange: () => {},
};
