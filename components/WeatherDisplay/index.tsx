import React from 'react'

type WeatherData = {
    location: {
        name: string;
        region: string;
        country: string;
    };
    current: {
        temp_c: number;
        condition: {
            text: string;
            icon: string;
        };
        wind_kph: number;
        humidity: number;
        last_updated: string;
    };
}

const index = (props: Props) => {
  return (
    <div>index</div>
  )
}

export default index