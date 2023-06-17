import React, { useEffect, useState } from "react";
import "./Input.css";

const Input = ({ type, placeholder, setDetails, details }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [ErrorclassName, setClassName] = useState("");

  const handleInputChange = (e, setInput) => {
    if (type == "number") {
      if (e.target.value.length <= 16) {
        setInput(e.target.value);
      }
    } else if (type == "month" || type == "year") {
      if (e.target.value.length <= 2) {
        setInput(e.target.value);
      }
    } else if (type == "security") {
      if (e.target.value.length <= 3) setInput(e.target.value);
    } else {
      setInput(e.target.value);
    }
  };

  useEffect(() => {
    // Set to default text when empty
    if (input == "") {
      let newDetail = { ...details };
      if (type == "name") {
        newDetail[type] = "JANE DOE";
        setError("");
      } else if (type == "number") {
        newDetail[type] = "1234 5678 9101 0000";
        setError("");
      } else if (type == "month") {
        newDetail[type] = "12";
        setError("");
      } else if (type == "year") {
        newDetail[type] = "12";
        setError("");
      } else if (type == "security") {
        newDetail[type] = "343";
        setError("");
      }
      setDetails(newDetail);
    }

    if (input != "") {
      let newDetail = { ...details };
      if (type == "name") {
        // the name should contain
        for (let i = 0; i < input.length; i++) {
          if (input[i] >= 0 && input[i] <= "9" && input[i] != " ") {
            setError("Name should not contain numbers");
            // TODO
            setClassName("NameError");
            return;
          } else {
            setClassName("");
            setError("");
          }
        }
        // newDetail[type] = input;
      } else if (type == "number") {
        // Create an Error during submit check the length :  and a split needed
        for (let i = 0; i < input.length; i++) {
          if (
            (input[i] >= "a" && input[i] <= "z") ||
            (input[i] >= "A" && input[i] <= "Z")
          ) {
            setError("Number should not contain any letter");
            // TODO
            setClassName("NumberError");
            return;
          } else {
            setError("");
          }
        }
        // newDetail[type] = input;
      } else if (type == "month") {
        for (let i = 0; i < input.length; i++) {
          if (
            (input[i] >= "a" && input[i] <= "z") ||
            (input[i] >= "A" && input[i] <= "Z")
          ) {
            setError("Number should not contain any letter in months");
            setClassName("CombineError");
            return;
          } else {
            setError("");
          }
        }

        if (input > 12) {
          setError("There are only 12 months in a calendar");
        } else if (input <= 0) {
          setError("The month starts from 1 and not 0");
          setClassName("CombineError");
        }
      } else if (type == "year") {
        for (let i = 0; i < input.length; i++) {
          if (
            (input[i] >= "a" && input[i] <= "z") ||
            (input[i] >= "A" && input[i] <= "Z")
          ) {
            setError("Number should not contain any letter in year");
            setClassName("CombineErrors");

            return;
          } else {
            setError("");
          }
        }

        let thisyear = new Date().getFullYear();
        thisyear = thisyear % 100;

        if (input.length > 1) {
          if (input <= thisyear) {
            setError("Your card is already expired");
            setClassName("CombineErrors");
          } else {
            setError("");
          }
        }
      } else if (type == "security") {
        for (let i = 0; i < input.length; i++) {
          if (
            (input[i] >= "a" && input[i] <= "z") ||
            (input[i] >= "A" && input[i] <= "Z")
          ) {
            setError("Number should not contain any letter in cvc");
            setClassName("CombineError");

            return;
          } else {
            setError("");
          }
        }
      }
      newDetail[type] = input;
      setDetails(newDetail);
    }
  }, [input]);

  return (
    <div className="OuterContainer">
      <input
        value={input}
        // onChange={(e) => setInput(e.target.value)}
        onChange={(e) => handleInputChange(e, setInput)}
        type="text"
        placeholder={placeholder}
        // className={`InputContainer ${ErrorclassName ? "ErrorInput" : ""} `}
        className={error ? "ErrorInput" : "InputContainer"}
      />
      {!error ? "" : <div className={ErrorclassName}>{error}</div>}
    </div>
  );
};

export default Input;
