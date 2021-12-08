import React, { FC, useEffect, useRef } from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { FreeMode, Virtual, Zoom, Navigation } from "swiper";
import { IPhoto } from "modules/photo";
import { ReactComponent as CloseImage } from "./images/close.svg";
import { ReactComponent as PrevSlideImage } from "./images/arrow-left.svg";
import { ReactComponent as NextSlideImage } from "./images/arrow-right.svg";
import "swiper/swiper.min.css";
import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/modules/zoom/zoom.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "./style.scss";

SwiperCore.use([FreeMode, Virtual, Zoom, Navigation]);

const breakpoints = {
  0: {
    spaceBetween: 10,
  },
  481: {
    spaceBetween: 15,
  },
  769: {
    spaceBetween: 30,
  },
};

const navigation = {
  prevEl: ".slider__prev-btn",
  nextEl: ".slider__next-btn",
  disabledClass: "slider__nav-btn-disabled",
};

interface SliderProps {
  photos: IPhoto[];
  onSlideClick: () => any;
  onCloseClick: () => any;
  isFullscreen: boolean;
}

const Slider: FC<SliderProps> = ({
  photos,
  onSlideClick,
  isFullscreen,
  onCloseClick,
}) => {
  const swiperRef = useRef({} as SwiperCore);
  const currentSliderRef = useRef(1);

  useEffect(() => {
    swiperRef.current.slideTo(currentSliderRef.current, 0);
  }, [isFullscreen]);

  const _onSlideClick = () => {
    currentSliderRef.current = swiperRef.current.clickedIndex;
    onSlideClick();
  };

  const _onCloseClick = () => {
    currentSliderRef.current = swiperRef.current.activeIndex;
    onCloseClick();
  };

  return (
    <div className={classNames("slider", { slider_fullscreen: isFullscreen })}>
      <div className="slider__container">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={isFullscreen ? 1 : 3}
          centeredSlides={true}
          breakpoints={breakpoints}
          freeMode={true}
          virtual={true}
          zoom={true}
          navigation={isFullscreen ? navigation : false}
          slideToClickedSlide={true}
        >
          {photos.map((photo, index) => (
            <SwiperSlide
              key={photo.id}
              virtualIndex={index}
              onClick={_onSlideClick}
            >
              <div className="swiper-zoom-container">
                <img src={photo.src} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {isFullscreen ? (
        <>
          <CloseImage className="slider__close-btn" onClick={_onCloseClick} />
          <div className="slider__nav">
            <div className="slider__nav-column">
              <PrevSlideImage className="slider__prev-btn" />
            </div>
            <div className="slider__nav-column">
              <NextSlideImage className="slider__next-btn" />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Slider;
