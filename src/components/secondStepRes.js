import React from "react";

function SecondStepRes() {
  return (
    <div className="secInfoCont">
      <h2>Required Info.</h2>
      <div className="infoInputCon">
        <input className="inputTxt" type="name" placeholder="Name" required />
        <input
          className="inputTxt"
          type="email"
          placeholder="example@domain.com"
          required
        />
        <input
          className="inputTxt"
          type="mobaile"
          placeholder="05********"
          required
        />
      </div>
      <h2 id="price">150$</h2>
      <p>Tax Included 15%</p>
    </div>
  );
}

export default SecondStepRes;
