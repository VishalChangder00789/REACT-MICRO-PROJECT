import React from "react";
import "../RightPanel/RightPanel.css";
import Title from "./Title/Title";
import Input from "./Inputs/Input";
import Button from "./Buttons/Button";

const RightPanel = ({ details, setDetails }) => {
  let allset = false;

  function handleSubmit(event) {
    event.preventDefault();
    let newObj = { ...details };

    // Name to capital
    let name = newObj["name"];
    name = name.toUpperCase();
    newObj["name"] = name;

    // Number includes Space
    let number = newObj["number"];
    if (number.length == 16) {
      number =
        number.slice(0, 4) +
        " " +
        number.slice(4, 8) +
        " " +
        number.slice(8, 12) +
        " " +
        number.slice(12, 16);
      newObj["number"] = number;
    }
    // Month

    setDetails(newObj);

    //TODO::NEED CONCENTRATION (JUST ADD THE SPACES SOMEHOW) :: cHECK HOW TO ADD SPACES IN THE STIRNG
  }

  return (
    <div className="RightPanelContainer">
      <form className="FormContainer">
        {/*  */}
        <div className="InputHolders marginTop" id="CardHolderName_id">
          <Title title="CARD HOLDER NAME" />
          <Input
            details={details}
            setDetails={setDetails}
            type="name"
            placeholder="Enter your name"
          />
        </div>

        <div className="InputHolders marginTop" id="CardNumber_id">
          <Title title="CARD NUMBER" />
          <Input
            details={details}
            setDetails={setDetails}
            type="number"
            placeholder="Enter your number"
          />
        </div>

        <div className="ImportantInformationHolder marginTop">
          <div className="MonthandYearHolder" id="MonthandYearHolder_id">
            <Title title="EXP.DATE (MM/YY)" />
            <div className="InputHolders_MonthYear">
              <Input
                details={details}
                setDetails={setDetails}
                type="month"
                placeholder="Month"
              />
              <Input
                details={details}
                setDetails={setDetails}
                type="year"
                placeholder="Year"
              />
            </div>
          </div>

          <div className="CVC_Container" id="CVC_Container_id">
            <Title title="CVC" />
            <Input
              details={details}
              setDetails={setDetails}
              type="security"
              placeholder="cvc"
            />
          </div>
        </div>

        <div
          onClick={handleSubmit}
          className="ConfirmButtonContainer marginTop"
        >
          <Button onClick={handleSubmit} title="CONFIRM" />
        </div>
      </form>
    </div>
  );
};

export default RightPanel;
