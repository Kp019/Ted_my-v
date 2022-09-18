import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import pic1 from "../img/pic1.jpg";

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
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={pic1}
                    style={{ height: "13rem" }}
                  />
                  <Card.Title>
                    <h2>kp</h2>
                  </Card.Title>
                  <Card.Text>
                    Web developer, designer
                    <br />
                    MACE
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={pic1}
                    style={{ height: "13rem" }}
                  />
                  <Card.Title>
                    <h2>kp</h2>
                  </Card.Title>
                  <Card.Text>
                    Web developer, designer
                    <br />
                    MACE
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={pic1}
                    style={{ height: "13rem" }}
                  />
                  <Card.Title>
                    <h2>kp</h2>
                  </Card.Title>
                  <Card.Text>
                    Web developer, designer
                    <br />
                    MACE
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={pic1}
                    style={{ height: "13rem" }}
                  />
                  <Card.Title>
                    <h2>kp</h2>
                  </Card.Title>
                  <Card.Text>
                    Web developer, designer
                    <br />
                    MACE
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
