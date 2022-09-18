import React from "react";
import "./Theme.css";
import { Container } from "react-bootstrap";

function Theme() {
  return (
    <div className="conta">
      <div className="cont">
        <Container fluid>
          <div className="head pt-5">
            <div className="title text-danger">
              <h1>ELEMENT OF TENET</h1>
            </div>
            <div className="line"></div>
          </div>
          <div
            className="cont col-12 p-5"
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "white",
            }}
          >
            <p>
              For our fifth sequel, we have chosen to feature the theme ‘Element
              of Tenet’. Element of tenet is our question to the bone chiseled
              rules imposed on us, that speak of conflicting emotions against
              the malign promises and the oddly selective virtues.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Theme;
