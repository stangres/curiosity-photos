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
      <div className="_container">
        <div className="_container-center block__info no-fullscreen">
          <Title />
          <Info />
        </div>
        <div className="_container-center block__main no-fullscreen">
          <Main />
        </div>
        <div className="block__gallery">
          <Gallery />
        </div>
        <div className="_container-center block__secondary no-fullscreen">
          <Secondary />
        </div>
        <div className="block__footer no-fullscreen">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
