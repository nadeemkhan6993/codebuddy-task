import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

const Address = ({ setKey, address1, address2, setAddress1, setAddress2 }) => {
  return (
    <Container className="my-5">
      <h3>Address</h3>
      <Form>
        <Row>
          <Col className="my-3" lg={6}>
            <Form.Control
              placeholder="Address Line 1"
              onChange={(e) => setAddress1(e.target.value)}
            />
          </Col>
          <Col className="my-3" lg={6}>
            <Form.Control
              placeholder="Address Line 2"
              onChange={(e) => setAddress2(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => setKey("contact")}>Back</Button>
          </Col>
          <Col></Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Address;
