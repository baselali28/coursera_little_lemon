import "./App.css";
import "./Fonts.css";
import littleLemonLogo from "./assets/img/Asset16@4x.png";
import rightYellow from "./assets/img/rY.png";
import leftGreen from "./assets/img/lG.png";
import illPic from "./assets/img/illustatPic.png";
import Reservation from "./components/Reservation";
import frstSecBkImg from "./assets/img/frstScec.jpg";
function App() {
  return (
    <body>
      <img className="rightYellow" src={rightYellow}></img>
      <img className="illPic" src={illPic}></img>
      <img className="leftGreen" src={leftGreen}></img>
      <header>
        <div className="navCon">
          <div>
            <img className="logo" src={littleLemonLogo}></img>
          </div>
          <nav className="topNav">
            <ul className="topNavItmCountainer">
              <li id="frtItm" className="topNavItm">
                About Us
              </li>
              <li className="topNavItm">Our Menu</li>
              <li className="topNavItm">Reserving</li>
              <li className="topNavItm">Contact Us</li>
            </ul>
          </nav>
        </div>
        <div className="resturantAbout">
          <h2 className="welcomTxt">
            Welcome to most popular restaurant in Dubai
          </h2>
          <h1 className="restName">LITTLE LEMON</h1>
          <h2 className="whoAreTxt">Who are we?</h2>
          <p className="aboutUsParagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="mainBtnClass headerButn">Reserve a table</button>
          <button className="mainBtnClass headerButn">Get Directions</button>
        </div>
      </header>
      <section className="secPick">
        <Reservation />
      </section>
      <img className="frstSecBkImg" src={frstSecBkImg} />
    </body>
  );
}

export default App;
