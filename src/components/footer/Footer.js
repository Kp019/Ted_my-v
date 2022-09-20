import React from "react";
import { Container } from "react-bootstrap";
import logo from "../img/logo.jpg";
import "./Footer.css";

function Footer() {
  return (
    <footer style={{ backgroundColor: "black" }}>
      <div className="fot-con">
        <Container className="cl">
          <div className="fot">
            <div className="fotf">
              <img className="fot-img" src={logo} alt="logo" />
              <p className="fot-txt">
                TEDxMACE is a full-day conference, licensed from TED, and
                independently organized by a sputtering student community at Mar
                Athanasius College of Engineering, Kothamangalam, Kerala.
              </p>
            </div>
            <div className="fotf1">
              <h4>Get in touch</h4>
              <p>
                Phone :+91 88227356,+91 7593971930
                <br />
                Email : tedxmace@gmail.com
              </p>
            </div>
          </div>
          <div className="cpy-rt m-12">
            Copyright © TEDxMACE 2020-2021. All Rights Reserved.
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
