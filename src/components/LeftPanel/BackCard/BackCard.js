import React from "react";
import "./BackCard.css";

const BackCard = ({ cvv }) => {
  return (
    <div className="BackCardContainer" id="BackCardContainer_id">
      <div className="InnerContainer">
        <div className="BlackMark" id="BlackMark_id"></div>
        <div className="GreyMarkContainer" id="GreyMarkContainer_id">
          <div className="CVV">{cvv}</div>
        </div>
      </div>
    </div>
  );
};

export default BackCard;
