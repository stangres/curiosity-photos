import React, { useState } from "react";
import classNames from "classnames";
import Slider from "./Slider";
import Spinner from "../Spinner";
import { useFetch } from "hooks";
import { photoService } from "modules/photo";
import { IPhoto } from "../../modules/photo/photo.model";
import "./style.scss";

// галерею можно было реализовать и другим способом в плане верстки
// (например создавать отдельный слайдер для полноразмерного изображения), но остановился на данном варианте,
// когда используется один компонент
const Gallery = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // здесь можно было бы использовать, например react-query, но для данной задачи написал свой простой хук
  const state = useFetch<IPhoto[]>(photoService.getLatest, []);

  const toggleFullscreenState = () => {
    document.body.classList.toggle("_lock");
    setIsFullscreen((state) => !state);
  };

  const onSlideClick = () => {
    if (!isFullscreen) {
      toggleFullscreenState();
    }
  };

  const onCloseClick = () => {
    toggleFullscreenState();
  };

  return (
    <div
      className={classNames("gallery", { gallery_fullscreen: isFullscreen })}
    >
      <div className="gallery__container">
        {state.isLoading ? (
          <Spinner />
        ) : state.isError ? (
          <div className="gallery__load-error">
            <span>Ошибка загрузки снимков</span>
          </div>
        ) : (
          <Slider
            photos={state.data}
            onSlideClick={onSlideClick}
            isFullscreen={isFullscreen}
            onCloseClick={onCloseClick}
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
