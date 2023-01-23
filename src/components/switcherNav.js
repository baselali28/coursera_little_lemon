import React from "react";
import { useState } from "react";
// import Swicher from './switcher';
import FierstStepRes from "./firstStepRes";
import SecondStepRes from "./secondStepRes";
import SucssesStepRes from "./sucssesStepRes";
// import TimePickCust from "./timePicker";
import dubaiView from "../assets/img/dubaiView.webp";

function SwitcherNav() {
  const [step, setStep] = useState(1);
  function handleSteps(val) {
    setStep(val);
  }
  return (
    <div className="switcherNav">
      <h1>Reserving</h1>
      <div className="frstComp">
        <div className="pickerContainer">
          <div className="stepsContainer">
            <div className="inputsSteps">
              <input
                type="radio"
                name="stepRadio"
                className="switcherButton"
                onClick={() => handleSteps(1)}
                value="1"
                checked={step === 1}
              />
              <label>Pick Date</label>
            </div>
            <div className="inputsSteps">
              <input
                type="radio"
                name="stepRadio"
                className="switcherButton"
                onClick={() => handleSteps(2)}
                value="2"
                checked={step === 2}
              />
              <label>Your Info.</label>
            </div>
            <div className="inputsSteps">
              <input
                type="radio"
                name="stepRadio"
                className="switcherButton"
                onClick={() => handleSteps(3)}
                value="3"
                checked={step === 3}
              />
              <label>Pay</label>
            </div>
            <div className="inputsSteps">
              <input
                type="radio"
                name="stepRadio"
                className="switcherButton"
                onClick={() => handleSteps(4)}
                value="4"
                checked={step === 4}
              />
              <label>Congrads!</label>
            </div>
          </div>
          {step === 1 ? (
            <FierstStepRes text="1111" />
          ) : step === 2 ? (
            <SecondStepRes text="222" />
          ) : step === 3 ? (
            <SucssesStepRes text="333" />
          ) : (
            ""
          )}
        </div>
        <div className="dubaiViewContainer">
          <img src={dubaiView} className="dubaiViewPic" />
        </div>
      </div>
    </div>
  );
}

export default SwitcherNav;
