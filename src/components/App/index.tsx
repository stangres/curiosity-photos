import React from "react";
import Header from "../Header";
import Title from "../Title";
import Info from "../Info";
import Main from "../Main";
import Gallery from "../Gallery";
import Secondary from "../Secondary";
import Footer from "../Footer";
import "./style.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="_container-page">
        <div className="_container-main">
          <div className="block__info">
            <Title />
            <Info />
          </div>
          <div className="block__main">
            <Main />
          </div>
        </div>
        <div className="block__gallery">
          <Gallery />
        </div>
        <div className="_container-main">
          <div className="block__secondary">
            <Secondary />
          </div>
          <div className="block__footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
