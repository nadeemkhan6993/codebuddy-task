import React, { useState } from "react";
import { Tabs, Tab, Container, Row, Col, Button } from "react-bootstrap";
import Address from "./stepForm/Address";
import Contact from "./stepForm/Contact";
import Name from "./stepForm/Name";

const MultiStepForm = () => {
  const [key, setKey] = useState("name");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const [user, setUser] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUser({
      firstName,
      lastName,
      email,
      phone,
      address1,
      address2,
    });

    console.log(user);
  };

  return (
    <Container className="my-5 ">
      <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="name" title="Name">
          <Name
            setKey={setKey}
            firstName={firstName}
            lastName={lastName}
            setFirstName={setFirstName}
            setLastName={setLastName}
          />
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <Contact
            setKey={setKey}
            email={email}
            phone={phone}
            setEmail={setEmail}
            setPhone={setPhone}
          />
        </Tab>
        <Tab eventKey="address" title="Address">
          <Address
            address1={address1}
            address2={address2}
            setKey={setKey}
            setAddress1={setAddress1}
            setAddress2={setAddress2}
          />
        </Tab>
      </Tabs>
      <Row>
        <Col>
          <Button onClick={submitHandler}>Submit</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MultiStepForm;
