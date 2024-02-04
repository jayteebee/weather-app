import { Card, CardContent, Grid, Typography } from '@mui/material';
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

type WeatherDisplayProps = {
    data: WeatherData | null;
};

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({data}) => {
    if (!data) return <Typography>Search a location for its weather.</Typography>
  return (
    <Card>
        <CardContent>
            <Typography>
                Weather in {data.location.name}, {data.location.region}, {data.location.country}, as of {data.current.last_updated.slice(-5)}
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography color="textSecondary" variant='body2'>Temperature: {data.current.temp_c}°C</Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography color="textSecondary" variant='body2'>Condition: {data.current.condition.text}</Typography>
                    <img src={data.current.condition.icon} alt="Weather Icon" />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography color="textSecondary" variant='body2'>Wind: {data.current.wind_kph} kph</Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography color="textSecondary" variant='body2'>Humidity: {data.current.humidity}%</Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default WeatherDisplay;