import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import clsx from "clsx";

import InfoBlock from "../../InfoBlock/";
import Button from "../../Button/";

import { useStep } from "../StepContext";

import { succesIcon } from "../../icons";
import { generateFields } from "../../utils/";

const constNames = {
  term: "Срок",
  participant: "Ответственный участник",
  perfomer: " Исполнитель",
  status: " Статус",
};

import "./Phase.scss";

export const Phase = ({
  className,
  modificators,
  title,
  index,
  isFailuer,
  handler,
  disabled,
  showHandler,
  ...attr
}) => {
  const { step } = useStep();
  const classes = classNames(
    "phase",
    className,
    modificators,
    { "success": !isFailuer && step > index },
    { "working": !isFailuer && step <= index },
    { "failure": isFailuer },
  );

  const fileds = useMemo(() => generateFields(attr, constNames), [attr]);

  return (
    <div className={classes}>
      <div className="phase__line"></div>
      <div className="phase-header">
        <div
          className={`phase-header__icon ${clsx({
            success: step > index,
            working: step <= index,
          })}`}
        >
          {succesIcon("phase__icon")}
        </div>
        <p className="phase-header__title">{title}</p>
      </div>
      <div className="phase-content">
        <div className="phase-content__information">
          {fileds.map((el) => (
            <InfoBlock key={el.id} value={el.value} label={el.title} />
          ))}
        </div>
        {showHandler && (
          <Button
            className="phase-content__handler"
            color="blue"
            onClick={handler}
            disabled={disabled}
            size="M"
          >
            Приступить
          </Button>
        )}
      </div>
    </div>
  );
};

Phase.propTypes = {
  className: PropTypes.string,
  modificators: PropTypes.string,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handler: PropTypes.func,
  showHandler: PropTypes.bool,
  isFailuer: PropTypes.bool,
};

Phase.defaultProps = {
  className: "",
  modificators: "",
  isFailuer: false,
  showHandlder: false,
  handler: () => {},
};
