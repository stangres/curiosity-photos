import React from "react";
import "./style.scss";

const Info = () => {
  return (
    <div className="info">
      <div className="info__container">
        <div className="info__column">
          <span className="info__label">Million km of earth</span>
          <span className="info__value">55</span>
        </div>
        <div className="info__column info__column_center">
          <span className="info__label">Temperature on the planet</span>
          <span className="info__value">
            -153
            <span className="info__measure-unit">°C</span>
          </span>
        </div>
        <div className="info__column">
          <span className="info__label">Оf the mass of the Earth</span>
          <span className="info__value">
            10,7
            <span className="info__measure-unit">%</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
