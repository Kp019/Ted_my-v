import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import pic1 from "../img/pic1.jpg";
import "./Speakers.css";

function Speaker() {
  return (
    <div>
      <Container className="conta">
        <div className=" title clo-12 m-5 pt-5" style={{ color: "white" }}>
          <h1>Our Speakers</h1>
        </div>
        <div>
          <Row>
            <Col>
              <Card>
                <Card.Body className="speak-1">
                  <div className="speak-1-tit">
                    <Card.Img
                      variant="top"
                      src={pic1}
                      style={{ height: "15rem" }}
                    />
                  </div>
                  <Card.Title>
                    <h2>kp</h2>
                  </Card.Title>
                  <Card.Text className="speak-txt-1">
                    <p>
                      What becomes our truth Is a series of well practiced
                      beliefs. An embodiment of this statement as such would be
                      Apoorva Bose, actress, lawyer, and communications expert
                      at the UN Environment Programme, one of our array of
                      speakers at TEDxMACE ready to embark you on an explorative
                      journey with her words.{" "}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body className="speak-1">
                  <div className="speak-1-tit">
                    <Card.Img
                      variant="top"
                      src={pic1}
                      style={{ height: "15rem" }}
                    />
                  </div>
                  <Card.Title>
                    <h2>kp</h2>
                  </Card.Title>
                  <Card.Text className="speak-txt-1">
                    <p>
                      What becomes our truth Is a series of well practiced
                      beliefs. An embodiment of this statement as such would be
                      Apoorva Bose, actress, lawyer, and communications expert
                      at the UN Environment Programme, one of our array of
                      speakers at TEDxMACE ready to embark you on an explorative
                      journey with her words.{" "}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body className="speak-1">
                  <div className="speak-1-tit">
                    <Card.Img
                      variant="top"
                      src={pic1}
                      style={{ height: "15rem" }}
                    />
                  </div>
                  <Card.Title>
                    <h2>kp</h2>
                  </Card.Title>
                  <Card.Text className="speak-txt-1">
                    <p>
                      What becomes our truth Is a series of well practiced
                      beliefs. An embodiment of this statement as such would be
                      Apoorva Bose, actress, lawyer, and communications expert
                      at the UN Environment Programme, one of our array of
                      speakers at TEDxMACE ready to embark you on an explorative
                      journey with her words.{" "}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="speak-1">
                <Card.Body>
                  <div className="speak-1-tit">
                    <Card.Img
                      variant="top"
                      src={pic1}
                      style={{ height: "15rem" }}
                    />
                  </div>
                  <Card.Title>
                    <h2>kp</h2>
                  </Card.Title>

                  <Card.Text className="speak-txt-1">
                    <p className="speak-1-cont">
                      What becomes our truth Is a series of well practiced
                      beliefs. An embodiment of this statement as such would be
                      Apoorva Bose, actress, lawyer, and communications expert
                      at the UN Environment Programme, one of our array of
                      speakers at TEDxMACE ready to embark you on an explorative
                      journey with her words.{" "}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Speaker;
