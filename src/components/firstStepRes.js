import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import TimePickCust from "./timePicker";
import CafPlan from "../assets/img/CafPlan.jpg";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
function FirstStepRes(props) {
  const [gustNum, setGustNum] = useState(0);
  return (
    <div className="frstPickerMainCon">
      <div className="pickDate">
        <h2>
          <FontAwesomeIcon icon={faCalendarDays} />
          &nbsp; Pick Date
        </h2>
        <TimePickCust />
      </div>
      <div className="pickGustNumCont">
        <button
          className="pickGstBtn"
          onClick={() => {
            setGustNum(gustNum === 0 ? 0 : gustNum - 1);
          }}
        >
          -
        </button>
        <p className="guestsNumTxt">
          {gustNum} Gusets {gustNum === 5 ? "is The Max." : ""}
        </p>
        <button
          className="pickGstBtn"
          onClick={() => {
            setGustNum(gustNum === 5 ? 5 : gustNum + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="cafPlanPicCon">
        <div className="availability">
          <p>
            <FontAwesomeIcon id="redSquare" icon={faSquare} />
            Reserved
          </p>
          <p>
            <FontAwesomeIcon id="grayquare" icon={faSquare} />
            Available
          </p>
          <p>
            <FontAwesomeIcon id="chosnSquare" icon={faSquare} />
            Chosen
          </p>
        </div>
        <img className="cafPlanPic" src={CafPlan} />
      </div>
    </div>
  );
}

export default FirstStepRes;
