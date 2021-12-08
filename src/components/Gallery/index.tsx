import React, { useRef, useState } from "react";
import classNames from "classnames";
import Slider from "./Slider";
import Spinner from "../Spinner";
import { useFetch } from "hooks";
import { photoService } from "modules/photo";
import { IPhoto } from "../../modules/photo/photo.model";
import "./style.scss";

const Gallery = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const windowScrollYRef = useRef(0);
  const state = useFetch<IPhoto[]>(photoService.getLatest, []);

  // useEffect(() => {
  //   if (isFullscreen) {
  //     // windowScrollYRef.current = window.scrollY;
  //     console.log(isFullscreen, windowScrollYRef.current);
  //     window.scroll({ top: 0 });
  //   } else {
  //     console.log(isFullscreen, windowScrollYRef.current);
  //     window.scroll({
  //       top: windowScrollYRef.current,
  //       behavior: "smooth",
  //     });
  //     windowScrollYRef.current = 0;
  //   }
  // }, [isFullscreen]);

  const toggleFullscreenState = () => {
    document.body.classList.toggle("_lock");
    setIsFullscreen((state) => !state);
  };

  const onSlideClick = () => {
    if (!isFullscreen) {
      windowScrollYRef.current = window.scrollY;
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
