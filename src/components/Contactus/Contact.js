import React from "react";
import { Col, Row, Button, Container, Form, FormGroup } from "react-bootstrap";

function Contact() {
  return (
    <div>
      <Container>
        <div className="title">
          <h1>Contact</h1>
        </div>
        <Form>
          <Row>
            <Col className="m-3">
              <Row>
                <FormGroup>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="Name"
                    placeholder="Enter name"
                    style={{ height: 40, width: 500 }}
                  />
                  <Form.Label className="mt-3">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    style={{ height: 40, width: 500 }}
                  />
                </FormGroup>
              </Row>
              <Row className="m-3">
                <Button
                  className="mt-5"
                  variant="primary"
                  type="submit"
                  style={{ height: 40, width: 80 }}
                >
                  Submit
                </Button>
              </Row>
            </Col>
            <Col className="m-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="message"
                placeholder="Enter Message"
                style={{ height: 250, width: 500 }}
              />
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Contact;
