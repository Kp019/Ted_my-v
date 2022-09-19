import React from "react";
import { Container } from "react-bootstrap";
import "./Home.css";
import vid from "../vid/vid.mp4";
/*F:\non acaademic\websites\tedx\tedx-react\src\components\vid\Sesxy_Promo.mp4*/
function Home() {
  return (
    <div>
      <Container fluid>
        <div className="main container-fluid">
          <div className="overlay"></div>
          <video src={vid} autoPlay loop muted />
          <div className="home js-fullheight container-fluid">
            <h2 className="txt">
              {" "}
              <span className="txte">ELEMENTS OF TENET</span>
              <br /> TED<sup>X</sup>MACE
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
