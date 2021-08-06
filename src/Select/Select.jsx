import React, { useMemo, useReducer, useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import clsx from "clsx";
import { v4 as uuid } from "uuid";

import { arrowIcon } from "../icons";
import { Option } from "./Option/";
import { SelectContext } from "./SelectContext";

import { useOnClickOutside } from "../useHooks";

import "./Select.scss";

const Select = ({
  className,
  modificators,
  title,
  id,
  onChange,
  onSelect,
  state,
  name,
  disabled,
  children,
}) => {
  const selectRef = useRef(null);
  const [showOptions, dispatch] = useReducer((showOptions) => !disabled && !showOptions, false);
  const [value, setValue] = useState(typeof state === "string" ? state : state[name], [state]);
  const [inputValue, setInputValue] = useState(value);
  const newId = useMemo(() => id || uuid(), []);
  const classes = classNames("select", className, modificators, { disabled: disabled });

  const handleOnChange = ({ target }) => {
    setInputValue(target.value);
  };

  useOnClickOutside(selectRef, () => {
    showOptions && dispatch();
  });

  return (
    <div className={classes} onChange={() => !disabled && onChange(value)} ref={selectRef}>
      {title && (
        <p className="select__title" htmlFor={newId}>
          {title}
        </p>
      )}
      <div className="select-input-field" onClick={dispatch}>
        <input
          value={inputValue}
          placeholder="Выберите из списка"
          className="select-input__input-field"
          onChange={handleOnChange}
          name={name}
          disabled={disabled}
        />
        <p className="select-input__arrow-icon">
          {arrowIcon(`select-input__icon ${clsx({ active: showOptions, disabled: disabled })}`)}
        </p>
      </div>

      {showOptions && (
        <div className="select-input-options">
          <SelectContext.Provider
            value={{
              setInputValue,
              inputValue,
              onChange,
              onSelect,
              setValue,
              dispatch,
              name,
            }}
          >
            {children}
          </SelectContext.Provider>
        </div>
      )}
    </div>
  );
};

export default Select;

Select.Option = Option;

Select.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  modificators: PropTypes.string,
  onSelect: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Select.defaultProps = {
  className: "",
  title: "",
  id: "",
  name: "",
  state: "",
  onChange: () => {},
  modificators: "",
  onSelect: () => {},
  disabled: false,
  children: null,
};
