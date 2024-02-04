import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://api.weatherapi.com/v1",
    params: {
        key: process.env.NEXT_PUBLIC_WEATHER_API_KEY
    }
});

export default axiosInstance;