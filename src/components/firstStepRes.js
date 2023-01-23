import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import TimePickCust from "./timePicker";

function FirstStepRes(props) {
  return (
    <div className="pickDate">
      <h2>
        <FontAwesomeIcon icon={faCalendarDays} />
        &nbsp; Pick Date
      </h2>
      <TimePickCust />
    </div>
  );
}

export default FirstStepRes;
