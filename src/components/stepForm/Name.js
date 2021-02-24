import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

const Name = ({ setKey, firstName, setFirstName, lastName, setLastName }) => {
  return (
    <Container className="my-5">
      <h3>Name</h3>
      <Form>
        <Row>
          <Col className="my-3" lg={6}>
            <Form.Control
              placeholder="First name"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
          <Col className="my-3" lg={6}>
            <Form.Control
              placeholder="Last name"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Button onClick={() => setKey("contact")}>Next</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Name;
