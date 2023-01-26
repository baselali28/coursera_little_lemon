import React from "react";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function GetDirc() {
  return (
    <div className="google-map-code">
      <h1 className="divH1">Get Directions</h1>
      <div className="mapCont">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12142.78229103519!2d55.33087740721225!3d25.200835640202023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1674760953173!5m2!1sen!2sae"
          // width="600"
          // height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          frameborder="0"
          className="mapGetDirc"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  );
}
