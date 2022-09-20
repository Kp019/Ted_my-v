import React from "react";
import { Container } from "react-bootstrap";
/*import pic1 from "../img/pic1.jpg";*/
import "./Speakers.css";

function Speaker() {
  return (
    <div>
      <Container className="conta">
        <div className=" title clo-12 m-5 pt-5" style={{ color: "white" }}>
          <h1>Our Speakers</h1>
        </div>
      </Container>
    </div>
  );
}

export default Speaker;
