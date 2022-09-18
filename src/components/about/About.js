import React from "react";
import "./About.css";
import { Card, Col, Container, Row } from "react-bootstrap";

function About() {
  return (
    <div>
      <Card className="con">
        <Container className="mb-5" fluid>
          <div className="title m-5">
            <h1>About</h1>
          </div>
          <Row className="m-3">
            <Col className="m-3">
              <Card>
                <Card.Body className="m-5">
                  <Card.Title>About MACE</Card.Title>
                  <Card.Text>
                    Carefully picked out, thoroughly thought out, and once
                    elegantly sequenced, words, have a way of resonating with
                    your soul. They could inspire, rejuvenate or leave you in
                    quiet introspection. Here, at TEDxMACE we bring you
                    hand-picked stories of unconventionally extraordinary
                    individuals who will showcase to you a world for not just
                    what it is, but, for what it could be. It's our fourth
                    attempt in stimulating interesting conversations in little
                    communities; our journey into the future in the company of
                    those making it.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="m-3">
              <Card>
                <Card.Body className="m-5">
                  <Card.Title>About tedx Mace</Card.Title>
                  <Card.Text>
                    Carefully picked out, thoroughly thought out, and once
                    elegantly sequenced, words, have a way of resonating with
                    your soul. They could inspire, rejuvenate or leave you in
                    quiet introspection. Here, at TEDxMACE we bring you
                    hand-picked stories of unconventionally extraordinary
                    individuals who will showcase to you a world for not just
                    what it is, but, for what it could be. It's our fourth
                    attempt in stimulating interesting conversations in little
                    communities; our journey into the future in the company of
                    those making it.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="m-3">
            <Col className="m-3">
              <Card>
                <Card.Body className="m-5">
                  <Card.Title>About ted</Card.Title>
                  <Card.Text>
                    A story like no other deserves a narrator like no other. TED
                    is a non-profit global community envisioning the tagline
                    'ideas worth spreading' through a series of talks spanning
                    18 minutes -- short, powerful conversations developing
                    narratives on diverse topics sprawling Technology,
                    Entertainment, Design, and pretty much everything that's
                    beyond and under the sun. Annually hosted twice, the
                    narratives by leading changemakers, thinkers and doers are
                    recorded and later made available for free.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="m-3">
              <Card>
                <Card.Body className="m-5">
                  <Card.Title>About tedX</Card.Title>
                  <Card.Text>
                    TEDx talks are conversations that aims at developing a local
                    narrative while maintaining the underlying vision of TED.
                    While TED takes more of a global approach, TEDx is a space
                    that celebrates local voices. It's been the force that has
                    taken TED across the planet and seeded all of these
                    communities. Licensed from TED, it offers a wholesome
                    experience to its speakers and attendees, a global stage for
                    local dialogues. These conversations are recorded and later
                    made available for free in TEDx handles.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}

export default About;
