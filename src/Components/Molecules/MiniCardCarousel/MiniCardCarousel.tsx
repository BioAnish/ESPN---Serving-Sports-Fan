"use client";
import HeadlineTopCard from "@/Components/Molecules/HeadlineCard/HeadlineTopCard/HeadlineTopCard";
import style from "./MiniCardCarousel.module.scss";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MiniCardCarousel = () => {
  return (
    <div className={style.miniCardCarousel}>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass={style.container}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass={style.itemClass}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div>
          <HeadlineTopCard></HeadlineTopCard>
        </div>
        <div>
          <HeadlineTopCard></HeadlineTopCard>
        </div>
        <div>
          <HeadlineTopCard></HeadlineTopCard>
        </div>
        <div>
          <HeadlineTopCard></HeadlineTopCard>
        </div>
        <div>
          <HeadlineTopCard></HeadlineTopCard>
        </div>
        <div>
          <HeadlineTopCard></HeadlineTopCard>
        </div>
        <div>
          <HeadlineTopCard></HeadlineTopCard>
        </div>
      </Carousel>
    </div>
  );
};

export default MiniCardCarousel;
