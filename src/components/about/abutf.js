import React from "react";
import "./abutf.css";
import { Container, Col, Row } from "react-bootstrap";

function Abutf() {
  return (
    <div className="abt-f">
      <Container>
        <div className="pt-5">
          <Row>
            <Col className="abt-ted">
              <div className="abt-ted-mc m-3">
                <h3>About TedX MACE</h3>
              </div>
              <div>
                <p>
                  Carefully picked out, thoroughly thought out, and once
                  elegantly sequenced, words, have a way of resonating with your
                  soul. They could inspire, rejuvenate or leave you in quiet
                  introspection. Here, at TEDxMACE we bring you hand-picked
                  stories of unconventionally extraordinary individuals who will
                  showcase to you a world for not just what it is, but, for what
                  it could be. It's our fourth attempt in stimulating
                  interesting conversations in little communities; our journey
                  into the future in the company of those making it.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="m-5 p-3">
            <Col className="m-3">
              <div>
                <h3>About Ted</h3>
              </div>
              <div>
                <p>
                  A story like no other deserves a narrator like no other. TED
                  is a non-profit global community envisioning the tagline
                  'ideas worth spreading' through a series of talks spanning 18
                  minutes -- short, powerful conversations developing narratives
                  on diverse topics sprawling Technology, Entertainment, Design,
                  and pretty much everything that's beyond and under the sun.
                  Annually hosted twice, the narratives by leading changemakers,
                  thinkers and doers are recorded and later made available for
                  free.
                </p>
              </div>
            </Col>
            <Col className="m-3">
              <div>
                <h3>About TedX</h3>
              </div>
              <div className="mt-3 mb-3">
                TEDx talks are conversations that aims at developing a local
                narrative while maintaining the underlying vision of TED. While
                TED takes more of a global approach, TEDx is a space that
                celebrates local voices. It's been the force that has taken TED
                across the planet and seeded all of these communities. Licensed
                from TED, it offers a wholesome experience to its speakers and
                attendees, a global stage for local dialogues. These
                conversations are recorded and later made available for free in
                TEDx handles.
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Abutf;
