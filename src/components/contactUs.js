import React from "react";

export default function ContactUs() {
  return (
    <div className="ContactUsCont">
      <h1 className="divH1">Contact Us</h1>
      <div className="inputContactUsCont">
        <input
          className="inputContactUS"
          type="name"
          placeholder="John Dohn"
          required
        />
        <input
          className="inputContactUS"
          type="email"
          placeholder="example@domain.com"
          required
        />
        <textarea
          className="inputContactUS bigtxt"
          type="text"
          placeholder="Hi,you can write your feedback here..."
          required
        />
      </div>
      <div className="contactUSBtnCont">
        <button className="contactUSBtn">Submit</button>
      </div>
    </div>
  );
}
