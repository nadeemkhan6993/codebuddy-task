import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

const Contact = ({ setKey, email, phone, setEmail, setPhone }) => {
  return (
    <Container className="my-5">
      <h3>Contact</h3>
      <Form>
        <Row>
          <Col className="my-3" lg={6}>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
          <Col className="my-3" lg={6}>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => setKey("name")}>Back</Button>
          </Col>
          <Col>
            <Button onClick={() => setKey("address")}>Next</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Contact;
