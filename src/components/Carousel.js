import React, { useState } from "react";
import littleLemonDinner from "../assets/img/littleLemonDinner.jpeg";
import mushedPotato from "../assets/img/mushedPotato.jpg";
import eggplanetSoup from "../assets/img/eggplanetSoup.png";
import soup from "../assets/img/soup.jpg";
import pasta from "../assets/img/pasta.jpg";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Carousel(props) {
  const items = [littleLemonDinner, mushedPotato, eggplanetSoup, soup, pasta];
  const [item, setItem] = useState(props.items);
  const [active, setActive] = useState(2);
  const [direction, setDirection] = useState("");
  const [level, setLevel] = useState(1);
  // const [dishName, setDishName] = useState("Little Lemon Dinner");

  function moveRight() {
    setActive((active + 1) % item.length);
    setDirection("right");
  }
  function moveLeft() {
    setActive(active < 0 ? item.length - 1 : active);
    setDirection("left");
  }
  // function handleLevel(e) {
  //   setLevel(e);
  // }
  const classForItem = "item active" + active;
  // console.log(items[active]);
  return (
    <div className="secCaroCont">
      <h1 className="divH1">Our Menu</h1>
      <div className="carouselCont">
        <div className=" item active">
          <img src={items[active]} />
        </div>
        <div className="item active-1">
          <img src={items[active - 1]} />
        </div>
        <div className="item active-2">
          <img src={items[active - 2]} />
        </div>
        <div className="item active1">
          <img src={items[active + 1]} />
        </div>
        <div className="item active2">
          <img clas src={items[active + 2]} />
        </div>
      </div>

      <div className="carouselBtnCont">
        <button
          className="carouselBtn"
          onClick={() => {
            setActive(active == 0 ? 4 : active - 1);
            // handleDishName();
          }}
          // disabled={active == 0 ? true : false}
        >
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </button>
        <div className="imgTxt">
          <h1>
            {active == 0
              ? "Little Lemon Dinner"
              : active == 1
              ? "Mushed Potato"
              : active == 2
              ? "Eggplanet Soup"
              : active == 3
              ? "Soup"
              : active == 4
              ? "Pasta"
              : ""}
          </h1>
          <p>
            {active == 0
              ? `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five`
              : active == 1
              ? `has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five`
              : active == 2
              ? `Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and   five`
              : active == 3
              ? `dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
             1500s, when an unknown printer took a galley of type
            and scrambled it to`
              : active == 4
              ? `been the industry's standard dummy text
            ever since the ake a type specimen book. It has survived not
            only five`
              : ""}
          </p>
          <h2>
            {active == 0
              ? "35"
              : active == 1
              ? "25"
              : active == 2
              ? "40"
              : active == 3
              ? "10"
              : active == 4
              ? "38"
              : ""}{" "}
            {"$"}
          </h2>
        </div>
        <button
          className="carouselBtn"
          onClick={() => {
            setActive(active == 4 ? 0 : active + 1);
            // handleDishName();
          }}
          // disabled={active == 4 ? true : false}
        >
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </button>
      </div>
    </div>
  );
}
