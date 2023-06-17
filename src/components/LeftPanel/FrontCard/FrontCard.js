import React from "react";
import "./FrontCard.css";

const FrontCard = ({ number, name, month, year }) => {
  return (
    <div className="FrontCardContainer" id="FrontCardContainer_id">
      <div className="FrontCard_Content_Holder">
        <div className="DesignHolder">
          <div className="DesignHolder_L"></div>
          <div className="DesignHolder_R"></div>
        </div>

        {/* NUMBER */}
        <div className="Number" id="Number_id">
          {number}
        </div>

        {/* NAME AND MONTH YEAR */}

        <div className="Name_MMYY_Container" id="Name_MMYY_Container_id">
          <div className="NameContainers">{name}</div>
          <div className="MMYYs">
            {month}/{year}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
