import React from "react";
import congradsPic from "../assets/img/Trophy.png";
export default function Congrads() {
  return (
    <div className="congradsContainer">
      <img src={congradsPic} />
      <h2>
        Congradulations !<br />
        See you soon
      </h2>
    </div>
  );
}
