import React, { useState } from "react";
import Axios from "axios";
import { Container, Modal, Button } from "react-bootstrap";
import WeatherComponent from "./components/WeatherComponent";
import CityComponent from "./components/CityComponent";

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const [error, setError] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const APIKEY = "f112d2a6dc4748adad8c4d73455aba99";

    try {
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
      );
      updateWeather(response.data);

      setError("");
    } catch (err) {
      setError(
        "Error fetching the weather data please provide a current city name"
      );
    }
  };

  return (
    
    <Container className="mt-5">
      
      <h3 className="text-center ">Guvi Weather App</h3>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}

      {error && (
        <Modal show={true} onHide={() => setError("")}>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>{error}</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => setError("")}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default App;
