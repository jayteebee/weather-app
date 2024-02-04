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

            </Typography>

            <Grid>
                <Grid>
                    <Typography> </Typography>
                </Grid>

                <Grid>
                <Typography> </Typography>
                </Grid>

                <Grid>
                <Typography> </Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default WeatherDisplay;