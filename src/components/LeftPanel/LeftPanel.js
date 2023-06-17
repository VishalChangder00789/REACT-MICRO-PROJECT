import React from "react";
import "../LeftPanel/LeftPanel.css";
import LeftPanelImage from "../../Assets/LeftPanel.png";
import FrontCard from "./FrontCard/FrontCard";
import BackCard from "./BackCard/BackCard";

const LeftPanel = ({ details }) => {
  return (
    <div className="LeftPanelContainer">
      <div className="SideImage">
        <div className="LeftPanelContainer_Image" />
      </div>
      <div className="CardLayouts">
        {/* <FrontCard />
        <BackCard /> */}
        <FrontCard
          number={details.number}
          name={details.name}
          month={details.month}
          year={details.year}
        />
        <BackCard cvv={details.security} />
      </div>
    </div>
  );
};

export default LeftPanel;
