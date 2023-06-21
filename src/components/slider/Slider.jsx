import React from "react";
import { useState } from "react";
import "./slider.css";
import { reality } from "./../../data";
import { SliderInfo } from "../sliderInfo/SliderInfo";

//TODO: DOKONČIT SLIDER responsivní zobrazení

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideReality = reality.filter((realita) => realita.popis);

  console.log(slideReality);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? slideReality.length - 1 : (prev) => prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === slideReality.length - 1 ? 0 : (prev) => prev + 1
    );
  };

  return (
    <div className="slider">
      <SliderInfo />
      <div
        className="container"
        style={{
          width: `${slideReality.length * 100}vw`,
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {slideReality.map((slideRealita) => (
          <img src={slideRealita.foto[0]} alt="" />
        ))}
      </div>
    </div>
  );
};
