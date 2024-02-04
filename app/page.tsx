"use client";
import { fetchWeather } from "@/utils/fetchWeather";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import WeatherDisplay from "@/components/WeatherDisplay";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async (city: string) => {
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
      console.log(data); // placeholder
    } catch (err) {
      console.error("Failed to fetch the weather: ", err);
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {/** COME BACK TO THIS */}
      {errorMessage && <p style={{color: "red"}} >{errorMessage}</p>}
      <WeatherDisplay data={weatherData} />
    </>
  );
}
