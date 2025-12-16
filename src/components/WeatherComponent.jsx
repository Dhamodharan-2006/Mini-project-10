import React from "react";
import Day from "../icons/day.svg";
import Weather from "../icons/weather.svg";
import Humidity from "../icons/humidity.svg";
import Wind from "../icons/wind.svg";
import Pressure from "../icons/pressure.svg";
import { Row, Image, Col, Card, Container } from "react-bootstrap";
import { WeatherIcons } from "./WeatherIcons";

export const WeatherInfoIcons = {
  sunset: Day,
  sunrise: Weather,
  humidity: Humidity,
  wind: Wind,
  pressure: Pressure,
};

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <Col
      xs={6}
      sm={4}
      md={3}
      lg="auto"
      className="d-flex justify-content-center mt-4"
    >
      <Card style={{ width: "10rem" }}>
        <Card.Img variant="top" src={WeatherInfoIcons[name]}></Card.Img>
        <Card.Body>
          <Card.Title>{value}</Card.Title>
          <Card.Text className="text-capitalize">{name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
function WeatherComponent(props) {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");

  const getTime = (ts, tz) => {
    const d = new Date((ts + tz) * 1000);
    return d.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    });
  };

  return (
    <div>
      <Container className="text-center">
        <Row className="justify-content-md-center mb-4">
          <Col>
            <h2>{`${Math.floor(weather?.main?.temp)}°C | ${
              weather?.weather[0].description
            }`}</h2>
          </Col>
          <Col>
            <Image
              src={WeatherIcons[weather?.weather[0].icon]}
              alt="weather icon"
              style={{ width: "100px", height: "100px" }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>{`${weather?.name},${weather?.sys?.country}`}</h3>
          </Col>
        </Row>
        <h4>Weather Info</h4>

        <Row className="justify-content-md-center mt-2 mb-4 ">
          <WeatherInfoComponent
            name={isDay ? "sunset" : "sunrise"}
            value={getTime(
              weather?.sys[isDay ? "sunset" : "sunrise"],
              weather?.timezone
            )}
          />
          <WeatherInfoComponent
            name="humidity"
            value={`${weather?.main?.humidity}%`}
          />
          <WeatherInfoComponent
            name="wind"
            value={`${weather?.wind?.speed}m/s`}
          />
          <WeatherInfoComponent
            name="pressure"
            value={`${weather?.main?.pressure}hPa`}
          />
        </Row>
      </Container>
      <h4>
        <a href="/">Go Back</a>
      </h4>
    </div>
  );
}

export default WeatherComponent;
