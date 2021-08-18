import React, { useMemo, useReducer } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Lightbox } from "react-modal-image";

import { PhotoGroup } from "./PhotoGroup/";

import { generateFields } from "../utils/";

import InfoBlock from "../InfoBlock/";

import "./PhotoCard.scss";

const constNames = {
  "perfomer": "Исполнитель",
  "date": "Дата",
  "geoPos": "Геолокаци",
  "comments": "Комментарии",
};

const PhotoCard = React.memo(({ className, isValid, modificators, imgUrl, ...attr }) => {
  const [showBox, dispatch] = useReducer((showBox) => !showBox, false);
  const classes = clsx(
    "photo-card",
    className,
    modificators,
    clsx({ success: isValid, failure: !isValid }),
  );

  const fileds = useMemo(() => generateFields(attr, constNames), [attr]);

  return (
    <div className={classes}>
      <div className="photo-card__photo">
        <img
          src={imgUrl}
          alt="photo"
          onClick={dispatch}
          className={clsx({ opened: showBox, closed: !showBox })}
        />

        {showBox && (
          <Lightbox
            medium={imgUrl}
            alt="photo"
            onClose={dispatch}
            imageBackgroundColor="rgba(88, 88, 88, 0.8)"
            hideZoom
            hideDownload
            showRotate
          />
        )}
      </div>
      <div className="photo-card__inforamtion">
        {fileds.map((el) => (
          <InfoBlock key={el.id} value={el.value} label={el.title} />
        ))}
      </div>
    </div>
  );
});

export default PhotoCard;

PhotoCard.PhotoGroup = PhotoGroup;

PhotoCard.propTypes = {
  className: PropTypes.string,
  isValid: PropTypes.bool,
  modificators: PropTypes.string,
  imgUrl: PropTypes.string,
};

PhotoCard.defaultProps = {
  className: "",
  isValid: false,
  modificators: "",
  imgUrl: "",
};
