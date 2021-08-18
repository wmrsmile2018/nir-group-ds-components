import React, { useMemo, useState, useCallback } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import RadioButton from "../RadioButton/";
import { AutoSizeInput } from "../Input/AutoSizeInput/";

import "./Vote.scss";
const { RadioGroup } = RadioButton;

const votingParametres = [{ id: "agree" }, { id: "disagree" }];

const Vote = ({ className, modificators, params, title, onChange }) => {
  const [state, setState] = useState({
    showComments: false,
    comments: "",
    vote: "",
  });

  const classes = clsx("vote", className, modificators);
  const handleOnClick = useCallback(({ target }) => {
    if (target.value === "disagree") {
      setState({
        ...state,
        showComments: true,
      });
    }
  }, []);

  const radioButons = useMemo(
    () =>
      params.reduce(
        (res, cur, i) =>
          res.concat({
            ...votingParametres[i],
            ...cur,
          }),
        [],
      ),
    [params],
  );

  const handleOnChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
    onChange({
      vote: state.vote,
      comments: state.comments,
      [target.name]: target.value,
    });
  };

  return (
    <div className={classes}>
      <RadioGroup title={title} className="vote">
        {radioButons.map((el) => (
          <RadioButton
            key={el.id}
            className="vote-radio-group"
            name="vote"
            onChange={handleOnClick}
            text={el.text}
            value={el.id}
            onChange={handleOnChange}
            noBorder
          />
        ))}
      </RadioGroup>
      {state.vote === "disagree" && (
        <AutoSizeInput
          title="Причина отказа в согласовании"
          state={state.comments}
          className="vote"
          onChange={handleOnChange}
          name="comments"
        />
      )}
    </div>
  );
};

export default React.memo(Vote);

Vote.propTypes = {
  className: PropTypes.string,
  modificators: PropTypes.string,
  params: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

Vote.defaultProps = {
  className: "",
  modificators: "",
};
