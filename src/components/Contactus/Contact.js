import React from "react";
import { Col, Row, Button, Container, Form, FormGroup } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_fu">
      <Container className="mt-3 ">
        <div className=" p-5 title">
          <h1>Contact</h1>
        </div>
        <Form>
          <Row className="cont-ty">
            <Col className="m-5">
              <Row className="cont-ty-r">
                <FormGroup>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="name"
                    type="Name"
                    placeholder="Enter name"
                  />
                  <Form.Label className="mt-3">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    className="email"
                    placeholder="Enter email"
                  />
                </FormGroup>
              </Row>
              <Row className="m-1 button">
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
            <Col className="m-5 msg">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="message"
                as="textarea"
                Rows={2}
                className="message"
                placeholder="Enter Message"
              />
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Contact;
