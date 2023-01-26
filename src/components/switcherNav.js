import React from "react";
import { useState } from "react";
// import Swicher from './switcher';
import FierstStepRes from "./firstStepRes";
import SecondStepRes from "./secondStepRes";
import SucssesStepRes from "./sucssesStepRes";
import Congrads from "./Congrads";
// import TimePickCust from "./timePicker";
import dubaiView from "../assets/img/dubaiView.webp";

function SwitcherNav() {
  const [step, setStep] = useState(1);
  function handleSteps(val) {
    setStep(val);
  }
  return (
    <div className="switcherNav">
      <h1 id="resTitle">Reserving</h1>
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
                disabled={true}
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
                disabled={true}
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
                disabled={true}
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
                disabled={true}
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
          ) : step === 4 ? (
            <Congrads text="333" />
          ) : (
            ""
          )}
          <div className="resBtnMainCont">
            {step === 1 ? (
              <button className="resBtn" onClick={() => setStep(2)}>
                {" "}
                Next
              </button>
            ) : step === 2 ? (
              <div className="resBtnCont">
                <button className="resBtn" onClick={() => setStep(1)}>
                  {" "}
                  Previous
                </button>
                <button className="resBtn" onClick={() => setStep(3)}>
                  {" "}
                  Next
                </button>
              </div>
            ) : step === 3 ? (
              <div className="resBtnCont">
                <button className="resBtn" onClick={() => setStep(2)}>
                  {" "}
                  Previous
                </button>
                <button className="resBtn" onClick={() => setStep(4)}>
                  {" "}
                  Pay
                </button>
              </div>
            ) : (
              <button className="resBtn" onClick={() => setStep(1)}>
                {" "}
                Reserve another Table Again!
              </button>
            )}
          </div>
        </div>
        <div className="dubaiViewContainer">
          <img src={dubaiView} className="dubaiViewPic" />
        </div>
      </div>
    </div>
  );
}

export default SwitcherNav;
