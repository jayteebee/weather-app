'use client';
import { fetchWeather } from "@/utils/fetchWeather";
import { useState } from "react";

export default function Home() {
const [weatherData, setWeatherData] = useState(null)

const handleSearch = async (city: string) => {
  try {
    const data = await fetchWeather(city);
    setWeatherData(data)
    console.log(data) // placeholder
  } catch (err) {
    console.error(err)
  }
}

  return (

      <h1>Placeholder Header For Home</h1>

  );
}
