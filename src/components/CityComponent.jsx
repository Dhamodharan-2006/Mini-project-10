import React from "react";
import {
  Form,
  Button,
  Image,
  Row,
  Col,
  Card,
  Container,
} from "react-bootstrap";
import Day from "../icons/day.svg";

function CityComponent(props) {
  const { updateCity, fetchWeather } = props;
  return (
    <Row>
      <Col md={3}></Col>
      <Col md={6}>
        <Card style={{ backgroundColor: "lightgrey" }}>
          <Container style={{ padding: "25px" }}>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Image src={Day} roundedCircle width="100px" height="100px" />
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto" className="text-center mt-2">
                <h2>Find weather of your city</h2>
              </Col>
            </Row>
            <Form onSubmit={fetchWeather}>
              <Form.Group controlId="cityInput">
                <Form.Control
                  type="text"
                  placeholder="Enter your city name"
                  className="mt-1"
                  onChange={(e) => updateCity(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-3">
                Search
              </Button>
            </Form>
          </Container>
        </Card>
      </Col>
      <Col md={3}></Col>
    </Row>
  );
}

export default CityComponent;
