import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaypal,
  faApplePay,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";

function SucssesStepRes(props) {
  return (
    <div className="secInfoCont">
      <h2>Payment method</h2>
      <div>
        <div className="stepsContainer">
          <div className="inputsSteps">
            <FontAwesomeIcon className="fonAwPayIcn" icon={faPaypal} />
            <input
              type="radio"
              name="payMethod"
              className="switcherButton"
              // onClick={() => handleSteps(1)}
              value="1"
              // checked={step === 1}
            />
          </div>
          <div className="inputsSteps">
            <FontAwesomeIcon className="fonAwPayIcn" icon={faApplePay} />
            <input
              type="radio"
              name="payMethod"
              className="switcherButton"
              // onClick={() => handleSteps(2)}
              value="2"
              // checked={step === 2}
            />
          </div>
          <div className="inputsSteps">
            <FontAwesomeIcon className="fonAwPayIcn" icon={faCcVisa} />
            <input
              type="radio"
              name="payMethod"
              className="switcherButton"
              // onClick={() => handleSteps(3)}
              value="3"
              // checked={step === 3}
            />
          </div>
        </div>
      </div>
      <div className="infoInputCon">
        <input
          className="inputTxt"
          type="ccn"
          placeholder="Card Number"
          required
        />
        <input
          className="inputTxt"
          type="name"
          placeholder="John Dohn"
          required
        />
        <div className="ccvDateCont">
          <input id="expiredDate" className="inputTxt" type="month" required />
          {/* <input className="inputTxt" type="year" required /> */}
          <input
            className="inputTxt"
            type="number"
            placeholder="CCV"
            required
          />
        </div>
      </div>
      <h2 id="price2">150$</h2>
      <p>Tax Included 15%</p>
    </div>
  );
}

export default SucssesStepRes;
