import React from "react";
import "./style.scss";

const Secondary = () => {
  return (
    <div className="secondary">
      <div className="secondary__container">
        <div className="secondary__title">
          Mars Science Laboratory will study Mars' habitability
        </div>
        <div className="secondary__text">
          To find out, the rover carries the biggest, most advanced suite of
          instruments for scientific studies ever sent to the martian surface.
          The rover will analyze samples scooped from the soil and drilled from
          rocks. The record of the planet's climate and geology is essentially
          "written in the rocks and soil" -- in their formation, structure, and
          chemical composition. The rover's onboard laboratory will study rocks,
          soils, and the local geologic setting in order to detect chemical
          building blocks of life (e.g., forms of carbon) on Mars and will
          assess what the martian environment was like in the past.
        </div>
      </div>
    </div>
  );
};

export default Secondary;
