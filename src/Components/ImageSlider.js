import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 0px; //
  text-align: center;
  .slider {
    position: relative;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image {
    width: 30%; //
    height: 30%;
    border-radius: 10px;
  }

  .right-arrow {
    position: absolute;
    top: 80%;
    right: 25%; //
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .left-arrow {
    position: absolute;
    top: 80%;
    left: 25%; //
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1.2s;
    transform: scale(1.01);
  }
`;
const Comment = styled.div`
  margin: 20px 0px;
  .img_date {
    font-size: 22px;
    font-weight: bold;
    display: block;
    padding: 8px;
  }
  .img_description {
    font-size: 20px;
    display: block;
    padding: 8px;
  }
`;

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <Container className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              <Comment>
                {index === current && (
                  <span className="img_date">📅 {slide.date}</span>
                )}
                {index === current && (
                  <span className="img_description">{slide.description}</span>
                )}
              </Comment>
              {index === current && (
                <img src={slide.image} alt="our Photos" className="image" />
              )}
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default ImageSlider;
