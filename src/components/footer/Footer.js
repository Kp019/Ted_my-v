import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../img/logo.jpg";
import "./Footer.css";

function Footer() {
  return (
    <div className="cont mt-5 px-5" style={{ backgroundColor: "black" }}>
      <Container>
        <Row>
          <Col className="mt-5 p-5 cl1">
            <Row>
              <div className="cc px-1">
                <div className="logo">
                  <img src={logo} alt="log" />
                </div>
              </div>
            </Row>
            <Row xs={2}>
              <div className="text px-1">
                <p className="mt-1" style={{ color: "white" }}>
                  TEDxMACE is a full-day conference, licensed from TED, and
                  independently organized by a sputtering student community at
                  Mar Athanasius College of Engineering, Kothamangalam, Kerala.
                </p>
              </div>
            </Row>
          </Col>
          <Col className="cl2 mt-5">
            <Row className="mt-5 px-3" style={{ color: "white" }}>
              <h1>Get in touch</h1>
            </Row>
            <Row className="mt-3 px-3" style={{ color: "white" }}>
              Phone :+91 88227356,+91 7593971930
              <br />
              Email : tedxmace@gmail.com
            </Row>
          </Col>
        </Row>
        <Row className="cpy " style={{ color: "white" }}>
          <p className="mb-5">
            Copyright © TEDxMACE 2020-2021. All Rights Reserved.
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
