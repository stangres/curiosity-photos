import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__image">
          <picture>
            <source
              media="(min-width: 769px)"
              type="image/webp"
              srcSet="images/desktop.webp, images/desktop_2x.webp 2x, images/desktop_3x.webp 3x"
            />
            <source
              media="(min-width: 769px)"
              type="image/jpeg"
              srcSet="images/desktop.jpg, images/desktop_2x.jpg 2x, images/desktop_3x.jpg 3x"
            />
            <source
              media="(min-width: 376px)"
              type="image/webp"
              srcSet="images/tablet.webp, images/tablet_2x.webp 2x, images/tablet_3x.webp 3x"
            />
            <source
              media="(min-width: 376px)"
              type="image/jpeg"
              srcSet="images/tablet.jpg, images/tablet_2x.jpg 2x, images/tablet_3x.jpg 3x"
            />
            <source
              media="(max-width: 375px)"
              type="image/webp"
              srcSet="images/phone.webp, images/phone_2x.webp 2x, images/phone_3x.webp 3x"
            />
            <source
              media="(max-width: 375px)"
              type="image/jpeg"
              srcSet="images/phone.jpg, images/phone_2x.jpg 2x, images/phone_3x.jpg 3x"
            />
            <img src="images/desktop.jpg" alt="" />
          </picture>
        </div>
      </div>
    </header>
  );
};

export default Header;
