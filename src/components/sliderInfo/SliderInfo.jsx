import React from "react";
import "./sliderInfo.css";

export const SliderInfo = () => {
  return (
    <div className="sliderInfo">
      <div className="top">
        <div className="row">
          <h1>CJ´s BARBERSHOP</h1>
          <hr />
        </div>
      </div>
      <div className="bottom">
        <div className="row">
          <div className="left"></div>
          <div className="right">
            <span>Orlova 135, Roudnice nad Labem</span>
          </div>
        </div>

        <div className="row">
          <div className="left"></div>
          <div className="right">
            <span>Telefon: 777 606 447</span>
          </div>
        </div>
      </div>
    </div>
  );
};
