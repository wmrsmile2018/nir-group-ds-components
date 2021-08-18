import React, { useMemo, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";
import PropTypes from "prop-types";

import { clearIcon } from "../../icons";
import Button from "../../Button/";

import "./InputList.scss";

const InputList = ({
  className,
  modificators,
  title,
  id,
  onChange,
  state,
  name,
  ...rest
}) => {
  // const value = useMemo(() => (typeof state === "string" ? state : state[name]), [state]);
  const [value, setValue] = useState("");
  const [list, setList] = useState(state);
  const newId = useMemo(() => id || uuid(), []);
  const classes = clsx("input-list", className, { [`${modificators}`]: modificators });

  const handleOnAdd = () => {
    const newValue = [...list, value];
    if (value && list.indexOf(value) === -1) {
      onChange({
        target: {
          value: newValue,
          name,
        },
      });
      setList(newValue);
    }
  };

  const handleOnChange = ({ target }) => {
    setValue(target.value);
  };

  const handleOnDelete = (val) => {
    const newValue = list.filter((el) => el !== val);
    onChange({
      target: {
        value: newValue,
        name,
      },
    });
    setList(newValue);
  };

  return (
    <label className={classes}>
      <p className="input-list__title" htmlFor={newId}>
        {title}
      </p>
      <div className="input-list-inputfield">
        <input value={value} onChange={handleOnChange} id={newId} name={name} {...rest} />
        <Button className="input-list__button" color="blue" onClick={handleOnAdd}>
          Добавить
        </Button>
      </div>
      <div className="input-list-array">
        {list.map((el) => (
          <div className="input-list-array-element" key={uuid()}>
            <p className="input-list-array-element__text">{el}</p>
            <p
              className="input-list-array-element__clear"
              onClick={() => {
                handleOnDelete(el);
              }}
            >
              {clearIcon("input-list-array-element__icon")}
            </p>
          </div>
        ))}
      </div>
    </label>
  );
};

export default React.memo(InputList)

InputList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  state: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

InputList.defaultProps = {
  className: "",
  title: "",
  id: "",
  name: "",
  state: "",
  onChange: () => {},
};
